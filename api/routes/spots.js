const express = require('express');
const router = express.Router();
const Spot = require('../models/spot');
const mongoose = require('mongoose');
const SpotDb = mongoose.model('Spot', Spot)
const {initdb} = require('../scripts/connection')

initdb()

// Get all spots
router.get("/", async (req, res) => {
	const spots = await SpotDb.find()
	res.send(spots)
})

//Get one spot by id
router.get('/:id', function(req, res, next) {
  SpotDb.findOne(req.params.id, function(err, spot) {
    if (err) return next(err);
    res.json(spot);
  });
});

// Create a new spot
router.post("/add", async (req, res) => {
	console.log("add :", req.body)
	if(!req.body) {
		return res.status(400).json({ message: error_en.empty })
	}
	const spot = new SpotDb(req.body)
	await spot.save()
	res.send(spot)
})


//Delete one spot by id 
router.delete("/:id", async (req, res) => {
	try {
		await SpotDb.deleteOne({id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Spot doesn't exist!" })
	}
})

module.exports = router;
