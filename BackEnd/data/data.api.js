const express = require('express');
const router = express.Router();
const dataService=require('./data.service');

router.get('/schemes', getAllSchemes);

module.exports=router;

function getAllSchemes(req, res, next) {
  dataService.getAllSchemes()
      .then(users => res.json(users))
      .catch(err => next(err));
}
