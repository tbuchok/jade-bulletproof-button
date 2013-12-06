var jade = require('jade');

var html = jade.renderFile(__dirname + '/example.jade');

console.log(html);