/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee
 */
 
'use strict';


/**
 * node modules
 */
const router = require('express').Router();

/**
 * custom module
 */
const { home } = require('../controllers/home.controller');

// Step 1: Landing Page route
router.get('/', (req, res) => {
  res.render('pages/landing');
});

// Step 2: Login / Sign In Page route
router.get('/login', (req, res) => {
  res.render('pages/signin');
});

// Step 3: After login redirect to creator page
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.redirect('/home');
});

// Step 4: Creator Page route (your existing page)
router.get('/home', (req, res) => {
  res.render('pages/home');
});

module.exports = router;