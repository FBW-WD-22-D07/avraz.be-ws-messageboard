const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const passport = require('passport');
const configurePassport = require('./passport/passport');

const app = express();
configurePassport(passport);
dotenv.config();

// Specify your middleware here
app.use(express.json());
// Passport configuration
app.use(passport.initialize());

// Specify your routes here
app.use('/user', userRoutes);
app.use('/message', messageRoutes);

console.log("Connecting to the database. Put the kettle on while you wait... 🫖");

mongoose.set('strictQuery', false); // Add this line

const mongoUser = process.env.DB_USER;
const mongoPassword = process.env.DB_PASSWORD;
const mongoCluster = process.env.DB_CLUSTER;
const mongoDatabase = process.env.DB_DATABASE;

mongoose.connect(
  `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}/${mongoDatabase}?retryWrites=true&w=majority`,
 
  // mongodb+srv://avrazmahdi:@avrazmahdi@cluster0.afafvhl.mongodb.net/?retryWrites=true&w=majority

  //mongodb+srv://avrazmahdi:<password>@cluster0.afafvhl.mongodb.net/
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

  .then(() => console.log("Database connected! 😍☕"))
  .catch((error) => console.log(error, "Database connection failed! ☹️❌"));

app.listen(3003, () => console.log("The server is listening... 🐒"));

// mongodb+srv://avrazmahdi:avrazmahdi2@cluster0.knuex0i.mongodb.net/backendProject?retryWrites=true&w=majority

