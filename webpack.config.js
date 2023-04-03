const crypto = require('crypto');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
process.env.FORCE_COLOR = 1;
process.env.BABEL_DISABLE_CACHE = 1;
crypto.DEFAULT_ENCODING = 'hex';