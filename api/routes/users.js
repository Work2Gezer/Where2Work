const express = require('express');
const User = require('../models/user');
const router = express.Router();
const short = require('short-uuid');

// Get all users
router.get("/", async (req, res) => {
	const users = await User.find()
	res.send(posts)
})

//Get one user by id
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a new user
router.post("/", async (req, res) => {
	const user = new User({
		id : short.generate(),
    username : req.body.username,
    password : req.body.password,
    email : req.body.email,
    permissions: req.body.permissions ?? "user",
	})
	await user.save()
	res.send(post)
})

//Create a new admin path (url: /api/users/admin)
router.post("/admin", async (req, res) => {
	const user = new User({
		id : short.generate(),
    username : req.body.username,
    password : req.body.password,
    email : req.body.email,
    permissions: req.body.permissions ?? "admin",
	})
	await user.save()
	res.send(post)
})

module.exports = router;
