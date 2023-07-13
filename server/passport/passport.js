
const passport = require('passport');
// Other code...

const passportConfig = (passport) => {
  // Passport configuration code...
};

module.exports = passportConfig;

// const passport = require('passport');

// const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
// const User = require('../models/User');
// require('dotenv').config();

// const options = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.JWT_SECRET,
// };

// const passportConfig = (passport) => {
//   passport.use(
//     new JwtStrategy(options, async (jwtPayload, done) => {
//       try {
//         const user = await User.findById(jwtPayload.sub);

//         if (user) {
//           return done(null, user);
//         } else {
//           return done(null, false);
//         }
//       } catch (error) {
//         return done(error, false);
//       }
//     })
//   );
// };

// module.exports = passportConfig;
