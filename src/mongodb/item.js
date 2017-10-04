// app/models/article.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var itemSchema = mongoose.Schema({
	nom     : String,
	img     : String,
	conseils_arrosage : Number
});

// create the model for articles and expose it to our app
module.exports = mongoose.model('Item', itemSchema);

