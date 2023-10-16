import JWT from "passport-jwt";
const JwtStrategy = JWT.Strategy;
import User from "../models/user.js";
const ExtractJwt = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

export const passportAuth = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};
