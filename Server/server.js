function add(x, y){
    return x + y;
}

//over ws
var WebSocketServer = new require('ws');
var JsonRPC = require('simple-jsonrpc-js');

var webSocketServer = new WebSocketServer.Server({
    host: '0.0.0.0',
    port: 8090
}).on('connection', function(ws) {
    var jrpc = new JsonRPC();
    ws.jrpc = jrpc;

    ws.jrpc.toStream = function(message){
        ws.send(message);
    };

    ws.on('message', function(message) {
        jrpc.messageHandler(message);
    });

    jrpc.on('add', ['x', 'y'], add);

    jrpc.call('view.setTitle', 
    ["Ping from server"]);

});