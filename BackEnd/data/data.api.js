const express = require('express');
const router = express.Router();
const dataService=require('./data.service');

router.get('/schemes', getAllSchemes);
router.post('/myschemes', getAllMySchemes);
router.post('/feedback',saveFeedback);
router.get('/users',getAllUsers);


module.exports=router;

function getAllSchemes(req, res, next) {
  dataService.getAllSchemes()
      .then(schemes => res.json(schemes))
      .catch(err => next(err));
}

function getAllMySchemes(req, res, next) {
  console.log(req.body);
  dataService.getAllMySchemes(req.body)
      .then(schemes => res.json(schemes))
      .catch(err => next(err));
}

function saveFeedback(req, res, next) {
  console.log(req.body);
  dataService.saveFeedback(req.body)
      .then(message => res.json(message))
      .catch(err => next(err));
}
function getAllUsers(req, res, next) {
  console.log(req.body);
  dataService.getAllUsers(req.body)
      .then(message => res.json(message))
      .catch(err => next(err));
}
