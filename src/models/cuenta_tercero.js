const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const CuentaTerceroSchema = new Schema({
	id_cuenta: {
		type: String,
		required: true
	},
	no_cuenta:{
		type: Number,
		require:true
	},
	alias: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("cuenta_tercero", CuentaTerceroSchema);