const rateLimit = require('express-rate-limit');
const { ERRORS } = require('../config');

module.exports.limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: ERRORS.MANY_REQUEST },
});
