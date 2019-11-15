const express = require("express")
const router  = express.Router();
const Trans  = require("../models/trans")

router.get("/", async (req, res) => {
	let transferencia = await Trans.find({})
	res.json(transferencia)
})

router.post('/', async (req, res) => {
	let transferencia = new Trans(req.body)
	await transferencia.save();
	res.json({
		status: 'Transferencia realizada'
	});
});

module.exports = router;
