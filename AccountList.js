

const mongoose = require('mongoose');

mongoose.connect('mongodb://innoboost:teamInno321!@ec2-13-125-248-157.ap-northeast-2.compute.amazonaws.com:27017/admin', { dbName: 'innoboost' });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log('FreshbankdDB DataBase is connected with mongoose!');
});
