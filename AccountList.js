

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin', { dbName: 'innoboost' });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log('FreshbankdDB DataBase is connected with mongoose!');
});
