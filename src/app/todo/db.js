const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo', (err) => {
    if(!err)
    console.log('db connected');
    else
    console.log('not connected');

});
module.exports =mongoose;