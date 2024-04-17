const express = require('express');
const URL = require('../models/url');
const { handleRedirectToLongURL } = require('../controllers/url');

const router = express.Router();

router.get('/:shortID', handleRedirectToLongURL);

module.exports = router;