const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CuentaSchema = new Schema({
	no_cuenta: {
		type: Number,
		required: true
	},
	nombre_cuenta: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('cuenta', CuentaSchema)