const cors = require('cors');

// Define your CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests from specific origins (adjust as needed)
    const whitelist = ['http://localhost:5000/', 'http://example2.com'];
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE', // Specify which methods are allowed
  allowedHeaders: 'Content-Type,Authorization', // Speciorization headers, etc.)
  optionsSuccessStatus: 200, // Default status for succorization headers, etc.)
  optionsSuccessStatus: 200, // Default status for succssful OPTIONS request
};

module.exports = cors(corsOptions);
