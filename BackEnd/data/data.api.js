const express = require('express');
const router = express.Router();
const dataService=require('./data.service');

router.get('/schemes', getAllSchemes);
router.get('/myschemes', getAllMySchemes);

module.exports=router;

function getAllSchemes(req, res, next) {
  dataService.getAllSchemes()
      .then(users => res.json(users))
      .catch(err => next(err));
}

function getAllMySchemes(req, res, next) {
  dataService.getAllMySchemes()
      .then(users => res.json(users))
      .catch(err => next(err));
}
