/**
 * Created by Camilla on 03-05-2017.
 */
const app = require('../routes/blog');
const mongoose = require('mongoose');
var Blog = mongoose.model('Blog', exports.blogSchema);
var schema = require('../model/schema');
mongoose.connect('mongodb://localhost/chatAppTest');

var assert = require('assert');
const should = require('should');

var data;
describe('Blog', function() {
    describe('#find()', function() {
        it('should find blogs without an error', function(done) {

            data = Blog.find(done());
            console.log("test"+ data.chatroom);
        });
    });
});

describe('String#split', function(){
    it('should return an array', function(){
        assert(Array.isArray('a,b,c'.split(',')));
    });
});

describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new schema.Blog({
                user: "Name",
                date: new Date,
                msgTxt: "Message 2",
                chatroom: "Chatroom nice"
            });
            user.save(done);
        });
    });
});



