const path    = require('path');
const express = require('express');
const parser  = require('body-parser')
const cors    = require("cors")

const app     = express();

//Conexion a la base
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/banca_virtual')
  .then(() => console.log("Mongodb conectado"))
  .catch(err => console.log(err));

app.set('port', process.env.PORT || 3000);
app.use(cors())
app.use(parser.json())

app.use("/api/cuentas", require("./routes/cuenta"))
app.use("/api/cuentas_tercero", require("./routes/cuenta_tercero"))
app.use("/api/transferencia", require("./routes/transferencias"))

app.use(express.static(path.join(__dirname, 'public')));
app.use("/assets", express.static(path.join(__dirname, "../node_modules")))

app.listen(app.get('port'), () => {
  console.log("Puerto del servidor", app.get("port"))
});
