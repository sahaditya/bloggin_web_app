const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserPostSchema = new Schema({
    title : {type : String, require : true, max : 100},
    authorName : {type : String, require : true, max : 100},
    article : {type : String, require : true}
});

module.exports = mongoose.model('UserPost', UserPostSchema);
