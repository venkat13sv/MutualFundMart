const express = require('express');
const router = express.Router();
const adminService = require('./admin.service');

// routes
router.post('/authenticate', authenticate);
router.post('/schemes/add', addNewScheme);
module.exports = router;
console.log("Include Admin Service Ok");

function authenticate(req, res, next) {
    adminService.authenticate(req.body)
        .then(admin => admin ? res.json(admin) : res.status(400).json({ message: 'adminname or password is incorrect' }))
        .catch(err => next(err));
}

function addNewScheme(req, res, next) {
  console.log("add New Scheme Entry "+ JSON.stringify(req.body));
    adminService.addNewScheme(req.body)
        .then(() => res.json({message:"Scheme added successfully"}))
        .catch(err => next(err));
}
