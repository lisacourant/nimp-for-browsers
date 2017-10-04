/* eslint-disable */

/*
 * PLANT
 * 
 * item: Item
 * 
 */
var items = require('./item');

var Datastore = require('../bower_components/nedb_browser/nedb'),
    db = new Datastore({
        filename: 'D:/Pictures/NIMP_entrainement/db/plantdb.chill',
        autoload: true
    });

module.exports = {
    getAll: function (callback) {
        db.find({}, function (err, plants) {
            callback(err, plants);
        });
    },
    getItemById: function (id, callback) {
        db.find({
                _id: id
            },
            function (err, item) {
                callback(err, item[0]);
            })
    },

    insert: function (item, callback) {
        db.insert({
            item: item._id
        }, function (err, newPlant) {
            callback(err, newPlant);
        });
    }
};