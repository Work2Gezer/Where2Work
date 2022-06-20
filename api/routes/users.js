const express = require('express');
const User = require('../models/user');
const router = express.Router();
const short = require('short-uuid');
const mongoose = require('mongoose');
const {isEmail, isPassword} = require('../scripts/services.js')
const {error_en} = require('../models/error') //change language here 


const UserDb = mongoose.model('User', User)
const saltRounds = 10;

// Get all users
router.get("/", async (req, res) => {
	const users = await UserDb.find()
	res.send(users)
})

//login user by email and password
router.get('/login', async (req, res) => {
	if(isEmail(req.body.email)){
		const user = await UserDb.findOne({ email: req.body.email })
		if (user) {
			bcrypt.compare(req.body.password, hash, function(err, result) {
				if (result) {
					res.send(user)
				} else {
					res.status(401).send({ error: error_en.login })
				}
			});
			
		} else {
			res.status(401).send({ error: error_en.login})
		}
	}else{
		res.status(401).send({ error: error_en.login })
	}
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
	if(isEmail(req.body.email)) {
		if(isPassword(req.body.password)){
			bcrypt.genSalt(saltRounds, async function(err, salt) {
				bcrypt.hash(req.body.password, salt, async function(err, hash) {
					const user = new UserDb({
						id : short.generate(),
						username : req.body.username,
						password : hash,
						email : req.body.email,
						permissions: req.body.permissions ?? "user",
					})
					await user.save()
					res.send(user)
				});
			});
		} else {
			res.status(401).send({ error: error_en.checkCharPass })
		}
	} else {
		res.status(401).send({ error: error_en.mail })
	}
})

//Create a new admin path (url: /api/users/admin)
router.post("/admin", async (req, res) => {
	if(isEmail(req.body.email)) {
		if(isPassword(req.body.password)){
			bcrypt.genSalt(saltRounds, async function(err, salt) {
				bcrypt.hash(req.body.password, salt, async function(err, hash) {
					const user = new UserDb({
						id : String(short.generate()),
						username : req.body.username,
						password : hash,
						email : req.body.email,
						permissions: req.body.permissions ?? "admin",
					})
					await user.save()
					res.send(user)
				})
			});
		} else {
			res.status(401).send({ error: error_en.checkCharPass })
		}
	} else {
		res.status(401).send({ error: error_en.mail })
	}
	
})

//Delete one user by id 
router.delete("/:id", async (req, res) => {
	try {
		await UserDb.deleteOne({id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: error_en.user })
	}
})



module.exports = router;
