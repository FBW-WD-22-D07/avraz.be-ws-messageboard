const express = require('express');
const passport = require('passport');
const router = express.Router();
const messageController = require('../controllers/messageControllers');

// GET /messages
router.get('/', passport.authenticate('jwt', { session: false }), messageController.getAllMessages);

// POST /messages
router.post('/', passport.authenticate('jwt', { session: false }), messageController.createMessage);

// GET /messages/:messageId
router.get('/:messageId', passport.authenticate('jwt', { session: false }), messageController.getSingleMessage);

// PUT /messages/:messageId
router.put('/:messageId', passport.authenticate('jwt', { session: false }), messageController.updateMessage);

// DELETE /messages/:messageId
router.delete('/:messageId', passport.authenticate('jwt', { session: false }), messageController.deleteMessage);

module.exports = router;
