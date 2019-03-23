const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// cookie-parser setup (needed for flash messages)
app.use(cookieParser("keyboard cat"));
// session setup (needed for Auth process)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

// Define API routes here
//-1: Authentication api
app.use('/api/auth/', require('./routes/auth.js'));
//-1: Index api
app.use('/api/', require('./routes/'));
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  // not found
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  res.end();
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});