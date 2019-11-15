const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CuentaTSchema = new Schema({
	id_cuenta: {
		type: Number,
		required: true
	},
	alias: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('cuentat', CuentaTSchema);