const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const pumpSchema = new Schema({
  idImpianto: Number,
  gestore: String,
  bandiera: String,
  tipoImpianto: String,
  nomeImpianto: String,
  indirizzo: String,
  Comune: String,
  Provincia: String,
  Latitudine: String,
  Longitudine: String
});  

module.exports = User = mongoose.model("pump", pumpSchema);
