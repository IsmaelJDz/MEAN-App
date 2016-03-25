var mongoose = require('mongoose');

var TareaSchema = new mongoose.Schema({
	nombre: String,
	prioridad: Number
});

mongoose.model('Tareas', TareaSchema);