const express = require('express');
const User = require('../models/user');
const router = express.Router();
const short = require('short-uuid');
const mongoose = require('mongoose');
const {isEmail, isPassword} = require('../scripts/services.js')
const {error_en} = require('../models/error') //change language here 
const { initdb } = require('../scripts/connection.js')
const bcrypt = require('bcrypt');

initdb()

const UserDb = mongoose.model('User', User)
const saltRounds = 10;



// Get all users
router.get("/", async (req, res) => {
	const users = await UserDb.find()
	res.send(users)
})

// Register a new user
router.post("/signup", async (req, res) => {
    const body = req.body;
    if (!(body.email && body.password)) {
      return res.status(400).send({ error: error_en.empty });
    }
    const user = new UserDb(body);
    const salt = await bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
  });

//login user by email and password
router.post('/login', async (req, res) => {
	const body = req.body;
	if (!body.email || !body.password) {
        return res.status(400).json({ message: error_en.empty })
    }
	if(isEmail(body.email)){
		const user = await UserDb.findOne({ email: body.email })
		if (!user) { 
			res.status(401).send({ error: error_en.login})	
		}
		const validPassword = await bcrypt.compare(body.password, user.password);
		if (!validPassword) {
			res.status(200).send({ error: error_en.login });
		}
		const token = jwt.sign({
			id: user.id,
			username: user.username
		}, SECRET, { expiresIn: '3 hours' })
	
		res.send({ access_token: token })
	}else{
		res.status(401).send({ error: error_en.login })
	}
})

//Get one user by id
router.get('/:id', function(req, res, next) {
	if (!req.params.id) {
        return res.status(400).json({ message: error_en.empty })
    }
	UserDb.findOne(req.params.id, function(err, user) {
		if (err) return next(err);
		res.json(user);
	});
});

// Create a new user completely
router.post("/", async (req, res) => {
	const body = req.body;
	if (!body.username || !body.password) {
        return res.status(400).send({ error: error_en.empty })
    }
	if(isEmail(body.email)) {
		if(isPassword(body.password)){
			bcrypt.genSalt(saltRounds, async function(err, salt) {
				bcrypt.hash(body.password, salt, async function(err, hash) {
					const user = new UserDb({
						username : body.username,
						password : hash,
						email : body.email,
						permissions: body.permissions ?? "user",
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
	const body = req.body;
	if (!body.username || !body.password) {
        res.status(400).send({ error: error_en.empty })
    }
	if(isEmail(body.email)) {
		if(isPassword(body.password)){
			bcrypt.genSalt(saltRounds, async function(err, salt) {
				bcrypt.hash(body.password, salt, async function(err, hash) {
					const user = new UserDb({
						username : body.username,
						password : hash,
						email : body.email,
						permissions: body.permissions ?? "admin",
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
	if (!req.params.id) {
        return res.status(400).send({ error: error_en.empty })
    }
	try {
		await UserDb.deleteOne({id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: error_en.user })
	}
})



module.exports = router;
