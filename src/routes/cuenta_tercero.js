const express = require("express")
const router  = express.Router();
const Cuenta_tercero  = require("../models/cuenta_tercero")

router.get("/", async (req, res) => {
	let cuenta_tercero = await Cuenta_tercero.find({})
	res.json(cuenta_tercero)
})

router.get('/editar/:id', async (req, res) => {
	let cuenta_tercero = await Cuenta_tercero.findById(req.params.id)
	res.json(cuenta_tercero)
});

router.post('/', async (req, res) => {
	console.log(req.body)
	let cuenta_tercero = new Cuenta_tercero(req.body)
	await cuenta_tercero.save();
	res.json({
		status: 'Cuenta Guardada'
	});
});

router.put('/editar/:id', async (req, res) => {
	let cuenta_tercero = await Cuenta_tercero.findById(req.params.id);
	cuenta_tercero.id_cuenta = req.body.id_cuenta
	cuenta_tercero.no_cuenta = req.body.no_cuenta
	cuenta_tercero.alias     = req.body.alias
	await cuenta_tercero.save()
	res.json({
		status:"Editado con exito"
	})
});

module.exports = router;