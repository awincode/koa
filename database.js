const mongoose = require('mongoose');

const initDB = () => {
  mongoose.connect(
    // 'mongodb+srv://awincode:<password>@clusteraw-lq45o.mongodb.net/test?retryWrites=true',
    // 'mongodb+srv://awincode:Awc0demdbTreasure@clusteraw-lq45o.mongodb.net/test?retryWrites=true',
    'mongodb+srv://awincode:Awc0demdbTreasure@clusteraw-lq45o.mongodb.net/Koa?retryWrites=true',
    { useNewUrlParser: true }
    // function() {
    //   mongoose.connection.db.dropDatabase();
    // }    
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

  // mongoose.connection.on('connected', function() {
  //   console.log('Mongoose default connection is open');
  // })

  // mongoose.connection.on('disconnected', function() {
  //   console.log('Mongoose default connection is disconnected');
  // })

  // mongoose.connection.db.dropDatabase();
  // mongoose.connection.close();
      
};

module.exports = initDB;