const JwtStrategy =require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require("passport")
const keys=require('./keys')
const Admin = require('../models/admin')

const opts={}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;


passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const admin = await Admin.findById(jwt_payload.id);
      admin ? done(null, admin) : done(null, false);
    })
  );
  
  module.exports = isAuth = () =>
    passport.authenticate("jwt", { session: false });



