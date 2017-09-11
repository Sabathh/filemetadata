"use strict";

const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,'./uploads/')
	},
	filename: function(req,file,cb){
		cb(null,Date.now() + '-' +  file.originalname);

	}
});

const upload = multer({ storage: storage });

router.use(express.static('./views'));

router.post('/file-size', upload.single('file'), function(req, res) {
  res.json({ fileSize: req.file.size });
});

module.exports = router;