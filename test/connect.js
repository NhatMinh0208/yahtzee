require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('W');    


  console.log('Performing testing routine');    


  console.log('Creating score database');    


  const scoreSchema = new mongoose.Schema({
      name: String,
      score: Number, 
      time: Date,
  });
  const scoreModel = mongoose.model('Score', scoreSchema);

  console.log('Creating and uploading scores');    
  
  const lmao = new scoreModel({
      name: 'lmao',
      score: 69, 
      time: Date.now(),
  });



  lmao.save((err, lmao) => {
      if (err) console.error(err);
  });


  const lmao2 = new scoreModel({
    name: 'lmao2',
    score: 69, 
    time: Date.now(),
    });
    lmao2.save((err, lmao) => {
    if (err) console.log(err);
    });


    const lmao3 = new scoreModel({
        name: 'lmao3',
        score: 69, 
        time: Date.now(),
    });
    lmao3.save((err, lmao) => {
    if (err) console.log(err);
    });
    
  console.log('Listing scores');    


  setInterval( () => {
    scoreModel.find(function (err, score) {
        if (err) return console.error(err);
        console.log('Scores:');
        console.log(score);
      }).exec();
    }, 1000);
    console.log('Deleting scores');    
    scoreModel.deleteMany({}).exec();
    console.log('Done.');    
});