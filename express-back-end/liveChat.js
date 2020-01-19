const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const randomColor = require('randomcolor');
const uuidv1 = require('uuid/v1');

connectSocketServer = (httpServer) => {

  // Create the WebSockets server
  const wss = new SocketServer({ server: httpServer });

  // Set up a callback that will run when a client connects to the server
  // When a client connects they are assigned a socket, represented by
  // the ws parameter in the callback.
  wss.on('connection', (ws) => {
    console.log('Client connected');

    // sending color to client
    ws.send(JSON.stringify({ color: randomColor({ alpha: 1 }) }));

    wss.broadcast = function (data) {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    }
    wss.broadcast(JSON.stringify({ onlineUsers: wss.clients.size }));

    ws.on('message', function incoming(data) {
      const jsonData = JSON.parse(data);
      jsonData.id = uuidv1();
      jsonData.type = jsonData.type === 'postNotification' ? 'incomingNotification' : 'incomingMessage';

      wss.broadcast(JSON.stringify(jsonData));
    });

    // Set up a callback for when a client closes the socket. This usually means they closed their browser.
    ws.on('close', () => {
      console.log('Client disconnected');
      wss.broadcast(JSON.stringify({ onlineUsers: wss.clients.size }));
    });
  });

}

module.exports = connectSocketServer;
