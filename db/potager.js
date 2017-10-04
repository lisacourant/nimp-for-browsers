/* eslint-disable */

/*
 * PLANT
 * nom : string
 * largeur : int
 * longueur : int
 * nb_case_y : int
 * nb-case_x : int
 * cases[][] : case|case
 * 
 */
 
var cases = require('./case');

var Datastore = require('../bower_components/nedb_browser/nedb'),
  db = new Datastore({
    filename: 'D:/Pictures/NIMP_entrainement/db/potagerdb.chill',
    inMemoryOnly: false,
    autoload: true
  });

// appels à la bdd
module.exports = {
  getAll: function (callback) {
    db.find({}, function (err, docs) {
      callback(docs);
    });
  },

  insert: function (nom, largeur, longueur, nbCaseY, nbCaseX) {
    var tabCases = [];
    tabCases.length = nbCaseX;
    for(var i = 0; i<nbCaseX; i++){
      tabCases[i] = [];
      tabCases[i].length = nbCaseY;
    }
    console.log("calling insert");
    db.insert({
      nom: nom,
      largeur: largeur,
      longueur: longueur,
      nb_case_y: nbCaseY,
      nb_case_x: nbCaseX,
      cases : tabCases
      // création de tableau vide de dimension x y,
    }, function (err, newPotager) {
      console.log("newPotager", newPotager);
    });
  },

  getOneByNom: function (nom, callback) {
    db.find({
      nom: nom
    }, function (err, element) {
      callback(err, element[0]);
    });
  }
};