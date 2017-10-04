/* eslint-disable */

/*
 * ITEM
 * 
 * nom: String
 * img: String
 * conseils_arrosage: Number
 * 
 */
 
var Datastore = require('../bower_components/nedb_browser/nedb'),
    db = new Datastore({
        filename: 'D:/Pictures/NIMP_entrainement/db/itemdb.chill',
        autoload: true
    });

/*
var doc = {
    item: "bweSlNzukJJAQD6F"
};
db.insert(doc, function (err, newDoc) { // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
});
*/

module.exports = {
    getAll: function (callback) {
        db.find({}, function (err, docs) {
            callback(err, docs);
        });
    },

    getByName: function (name, callback) {
        db.find({
            nom: name
        }, function (err, item) {
            callback(err, item[0]);
        });
    },
    getById: function (id, callback) {
        db.find({
            _id: id
        }, function (err, item) {
            callback(err, item[0]);
        });
    },

    insert: function (name, img, conseils_arrosage, callback) {
        db.insert({
            nom: name,
            img: img,
            conseils_arrosage: conseils_arrosage
        }, function (err, newItem) {
            callback(err, newItem);
        });
    }
};