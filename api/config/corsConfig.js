const cors = require('cors');

// Define your CORS options
const corsOptions = {
  origin: function (origin, callback) {
    console.log('Origin:', origin); // Debugging untuk melihat dari mana origin berasal
    const whitelist = ['http://localhost:3000']; // Frontend Next.js
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE', // Methods yang diizinkan
  allowedHeaders: 'Content-Type,Authorization,Accept,Origin', // Headers yang diizinkan
  optionsSuccessStatus: 200, // Status default untuk permintaan OPTIONS yang sukses
};

module.exports = cors(corsOptions);
