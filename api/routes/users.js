const express = require('express');
const User = require('../models/user');
const router = express.Router();
const short = require('short-uuid');


const UserDb = mongoose.model('User', userSchema)

// Get all users
router.get("/", async (req, res) => {
	const users = await UserDb.find()
	res.send(users)
})

//Get one user by id
router.get('/:id', function(req, res, next) {
  UserDb.findOne(req.params.id, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

// Create a new user
router.post("/", async (req, res) => {
	const user = new UserDb({
		id : short.generate(),
		username : req.body.username,
		password : req.body.password,
		email : req.body.email,
		permissions: req.body.permissions ?? "user",
	})
	await user.save()
	res.send(user)
})

//Create a new admin path (url: /api/users/admin)
router.post("/admin", async (req, res) => {
	const user = new UserDb({
		id : String(short.generate()),
		username : req.body.username,
		password : req.body.password,
		email : req.body.email,
		permissions: req.body.permissions ?? "admin",
	})
	await user.save()
	res.send(user)
})

//Delete one user by id 
router.delete("/:id", async (req, res) => {
	try {
		await UserDb.deleteOne({id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
})



module.exports = router;
