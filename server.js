var app = require('./server-config.js');

//adds environmental variable to port
var port = process.env.PORT || 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
