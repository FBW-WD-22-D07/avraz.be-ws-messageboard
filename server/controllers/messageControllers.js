// Importiere erforderliche Module
const Message = require('../models/Message');

// Definiere und exportiere die Funktionen
exports.getAllMessages = (req, res) => {
  Message.find()
    .then(messages => {
      return res.status(200).json(messages);
    })
    .catch(error => {
      return res.status(500).json({ error: 'Server error' });
    });
};

exports.createMessage = (req, res) => {
  const { user_id, content, category } = req.body;

  const newMessage = new Message({
    user_id,
    content,
    category
  });

  newMessage.save()
    .then(() => {
      return res.status(201).json({ message: 'Message created successfully' });
    })
    .catch(error => {
      return res.status(500).json({ error: 'Server error' });
    });
};

exports.getSingleMessage = (req, res) => {
  const messageId = req.params.messageId;

  Message.findById(messageId)
    .then(message => {
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
      return res.status(200).json(message);
    })
    .catch(error => {
      return res.status(500).json({ error: 'Server error' });
    });
};

exports.updateMessage = (req, res) => {
  const messageId = req.params.messageId;
  const { content } = req.body;

  Message.findByIdAndUpdate(messageId, { content }, { new: true })
    .then(updatedMessage => {
      if (!updatedMessage) {
        return res.status(404).json({ error: 'Message not found' });
      }
      return res.status(200).json(updatedMessage);
    })
    .catch(error => {
      return res.status(500).json({ error: 'Server error' });
    });
};

exports.deleteMessage = (req, res) => {
  const messageId = req.params.messageId;

  Message.findByIdAndDelete(messageId)
    .then(deletedMessage => {
      if (!deletedMessage) {
        return res.status(404).json({ error: 'Message not found' });
      }
      return res.status(200).json({ message: 'Message deleted successfully' });
    })
    .catch(error => {
      return res.status(500).json({ error: 'Server error' });
    });
};
