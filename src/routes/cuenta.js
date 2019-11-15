const express = require("express")
const router  = express.Router();
const Cuenta  = require("../models/cuenta")


router.get("/", async (req, res) => {
	let cuenta = await Cuenta.find({})
	res.json(cuenta)
})

router.get('/editar/:id', async (req, res) => {
	console.log(req.body)
	let cuenta = await Cuenta.findById(req.params.id)
	res.json(cuenta)
});

router.post('/', async (req, res) => {
	let cuenta = new Cuenta(req.body)
	await cuenta.save();
	res.json({
		status: 'Cuenta Guardada'
	});
});

router.put('/editar/:id', async (req, res) => {
	let cuenta = await Cuenta.findById(req.params.id);
	cuenta.no_cuenta     = req.body.no_cuenta
	cuenta.nombre_cuenta = req.body.nombre_cuenta
	await cuenta.save()
	res.json({
		status:"Editado con exito"
	})
});

module.exports = router;
