/* eslint-disable */

/*
 * CASE
 * 
 * x: Number
 * y: Number
 * plant: Plant
 * 
 */
var plant = require('./plant');

var Datastore = require('../bower_components/nedb_browser/nedb'),
    db = new Datastore({
        filename: 'D:/Pictures/NIMP_entrainement/db/casedb.chill',
    });
    
db.loadDatabase(function(err) {  
    // Start issuing commands after callback...
});

module.exports = {
    getAll: function (callback) {
        db.find({}, function (err, docs) {
            callback(err, docs);
        });
    },

    getPlantAtXY: function (x, y, callback) {
        db.find({
            x: x,
            y: y
        }, function (err, plant) {
            callback(err, plant[0]);
        });
    },

    insert: function (x, y, plant, callback) {
        db.insert({
            x: x,
            y: y,
            plant: plant._id
        }, function (err, newCase) {
            callback(err, newCase);
        });
    }
};