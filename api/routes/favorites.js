const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Favs = require('../models/favorite');
const Spot = require('../models/spot');

const {error_en} = require('../models/error') //change language here 
const { initdb } = require('../scripts/connection.js')

initdb()
const FavoriteDb = mongoose.model('Favs', Favs)
const SpotDb = mongoose.model('Spot', Spot)

// Get all favorites
router.get("/", async (req, res) => {
	const users = await FavoriteDb.find()
	res.send(users)
})

//Get one favorite by id
router.get('/:uid', function(req, res, next) {
	if (!req.params.uid) {
        return res.status(400).json({ message: error_en.empty })
    }
	FavoriteDb.findOne(req.params.uid, function(err, user) {
		if (err) return next(err);
		res.json(user);
	});
});


//Delete one favorite by id 
router.delete("/:uid", async (req, res) => {
	if (!req.params.uid) {
        return res.status(400).send({ error: error_en.empty })
    }
	try {
		await FavoriteDb.deleteOne({id: req.params.uid })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: error_en.user })
	}
})

//add a new favorite    
router.post("/:uid/add/:spotId", async (req, res) => {
    if (!req.params.uid || !req.params.spotId) {
        return res.status(400).send({ error: error_en.empty })
    }
    FavoriteDb.findOne({id: req.params.uid}, function(err, favs) {
        if (err) return next(err);
        if(favs){
            favs.liste.push(req.params.spotId)
            favs.save()
            res.send({ success: error_en.favSuccess})
        }else{
            const fav = new FavoriteDb({
                uid : req.params.uid,
                liste : [req.params.spotId]
            })
            fav.save()
            res.send({ success: error_en.favSuccess })
        }
    })
})
