const express = require('express');
const router = express.Router();
const Spot = require('../models/spot');

const SpotDb = mongoose.model('Spot', spotSchema)

// Get all users
router.get("/", async (req, res) => {
	const spots = await SpotDb.find()
	res.send(spots)
})

//Get one user by id
router.get('/:id', function(req, res, next) {
  SpotDb.findOne(req.params.id, function(err, spot) {
    if (err) return next(err);
    res.json(spot);
  });
});

// Create a new user
router.post("/", async (req, res) => {
	const spot = new SpotDb({
		id : short.generate(),
    name : req.body.username,
    adress : req.body.adress,
    description : req.body.description ?? "",
    tel : req.body.tel,
    lat : req.body.lat,
    lng : req.body.lng,
	})
	await spot.save()
	res.send(spot)
})


//Delete one user by id 
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
