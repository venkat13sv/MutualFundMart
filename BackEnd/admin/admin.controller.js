const express = require('express');
const router = express.Router();
const adminService = require('./admin.service');

// routes
router.post('/authenticate', authenticate);
module.exports = router;
console.log("Include Ok");
function authenticate(req, res, next) {
    adminService.authenticate(req.body)
        .then(admin => admin ? res.json(admin) : res.status(400).json({ message: 'adminname or password is incorrect' }))
        .catch(err => next(err));
}
