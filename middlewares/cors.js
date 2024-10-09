import cors from "cors";

const allowedOrigins = [
  '*', // Allow all origins
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf('*') !== -1) {
      return callback(null, true); // Allow all origins
    }
    const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
    return callback(new Error(msg), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
};

const corsConfig = cors(corsOptions);

export default corsConfig;
