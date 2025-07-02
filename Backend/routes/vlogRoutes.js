const express = require('express');
const router = express.Router();
const Vlog = require('../models/Vlog');

router.get('/', async (req, res) => {
  const vlogs = await Vlog.find().sort({ createdAt: -1 });
  res.json(vlogs);
});

module.exports = router;
