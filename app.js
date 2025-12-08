/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee
 */
'use strict';

/**
 * node modules
 */
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

/**
 * custom modules
 */
const home = require('./src/routes/home.route');
const checkout = require('./src/routes/checkout.route');

/**
 * initial express app 
 */
const app = express();

/**
 * setting ejs view engine
 */
app.set('view engine', 'ejs');

/**
 * setting public folder
 */
app.use(express.static(`${__dirname}/public`));

/**
 * setting HTTP response secure headers
 */
app.use(helmet());

/**
 * 🔥 BODY PARSERS — must be before routes
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * routes
 */
app.use('/', home);
app.use('/checkout', checkout);

app.listen(process.env.PORT, () => {
  console.log(`app listening on http://localhost:${process.env.PORT}`);
});




/**
 * new riute
 */
const termsRoute = require("./src/routes/terms.route");
const landingRoute = require("./src/routes/landing.route");
const signinRoute = require("./src/routes/signin.route");
const privacyRoute = require("./src/routes/privacy.route");


app.use("/terms", termsRoute);
app.use("/landing", landingRoute);
app.use("/signin", signinRoute);
app.use("/privacy", privacyRoute);


