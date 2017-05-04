var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exports = module.exports = {};

exports.blogSchema = new Schema({
    user: String,
    date: Date,
    msgTxt: String,
    chatroom: String
});
exports.Blog = mongoose.model('Blog',exports.blogSchema);
