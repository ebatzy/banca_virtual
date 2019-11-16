const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransSchema = new Schema({
	id_cuenta_origen: {
		type: String,
		required: true
	},
	id_cuenta_destino: {
		type: String,
		required: true
	},
	cuenta_origen:{
		type: String,
		required: true
	},
	cuenta_destino: {
		type: String,
		required: true
	},
	monto: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("transferencia", TransSchema);
