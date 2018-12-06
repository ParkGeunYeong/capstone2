var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var concertSchema = new Schema(
    {
        title: String,
        venue: String,
        start_date: Date,
        end_date: Date
    }, 
    {
        collection: 'concerts'
    }
);

//interface to read, create, edit DataBase
mongoose.model('Concert', concertSchema); 
module.exports = mongoose.model('Concert');
