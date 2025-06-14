const startSocket = async () => {
  const socket = new WebSocket("wss://goldpricesocket.gramvey.com");
  socket.onmessage = onMessage;
};

const onMessage = (message) => {
  const socketMessage = JSON.parse(message.data);
  console.log(socketMessage);
};

startSocket();
