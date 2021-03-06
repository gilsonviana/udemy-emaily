const express = require('express');
const cookieSession = require('cookie-session');
const keys = require('./keys');
const passport = require('passport');
const mongoose = require('mongoose');

/**
 * import mongoose model */
require('./models/User');

const app = express();

mongoose.connect(

    keys.mongoURI,

    { useNewUrlParser: true }

).then(() => console.log('Connected to database.'));

app.use(cookieSession({

    name: 'session',

    keys: [keys.cookieKey],

    maxAge: 24 * 60 * 60 * 1000

}));

app.use(passport.initialize());
app.use(passport.session());

/**
 * import passport and routes */
require('./services/passport');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
