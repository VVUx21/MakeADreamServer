import cors from "cors";
const allowedOrigins = [
  'http://localhost:3000',
];

const corsOptions ={
  origin: function (origin, callback) {
    // Allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
};

const corsConfig = cors(corsOptions);

export default corsConfig;
