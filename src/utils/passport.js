import passport from "passport";
import { Strategy } from "passport-discord";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: "1133388237998665829",
      clientSecret: "U-oaAUQm4D57Qa7dBcvd7Wz-rixr_oG2",
      callbackURL: "http://127.20.30.1:5005/login",
      scope: ["identify"],
    },
    (accestoken, refreshtoken, profile, cb) => {
      process.nextTick(() => {
        return cb(null, profile);
      });
    }
  )
);

export default passport;
