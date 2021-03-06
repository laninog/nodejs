'use strict';

var mongoose = require('mongoose');

var db = function(){
    return {
        config: function(conf){
            mongoose.connect('mongodb://localhost/booksStore');
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'Connection Error'));
            db.once('open', function(){
                console.log('Connection Open');
            });
        }
    };
};

module.exports = db();