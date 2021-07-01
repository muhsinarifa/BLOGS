const express = require('express');
const router = express.Router();
const appModel = require("../models/appModel");
const blogController = require("../controllers/blogController");

router.get('/', blogController.see);
router.post('/add', blogController.add);
router.get('/display', blogController.display);
router.get('/delete', blogController.Delete);
router.get('/addblog', blogController.addblog);

module.exports= router;