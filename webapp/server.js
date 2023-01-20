const express = require('express')
const db = require('./database/db')
const path = require("path");
const helmet = require("helmet");

const app = express()

// Connect to db
db.connectDb()

// Middlewares
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginEmbedderPolicy: false
  })
);
app.use(express.json({ extended: false }))
console.log(process.env.NODE_ENV)
// Routes
// app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/email', require('./routes/api/email'))
app.use('/api/skills', require('./routes/api/skills'))

// Serve static
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'))
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))