var jade = require('jade');

var html = jade.renderFile(__dirname + '/example.jade', { pretty: true });

console.log(html);