const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//getting access to the user models class
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//new GoogleStrategy create a new instance of the Google Passport Strategy
//passport.use is like a generic register telling passport to use a very specific provider available and here it makes use of it
//the callbackURl is wher user will be sent to after they are granted permission to our application
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "http://localhost:3000/auth/google/callback",
      proxy: true
    },
    //using models class to create a new instance of user
    async (accessToken, refreshToken, profile, done) => {
      //finding one records inside the users collections where there are google ID
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //we already have a record with the given profile Id
        return done(null, existingUser);
      }
      //we dont have a user record with this ID, make a new record
      //save to the database
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
