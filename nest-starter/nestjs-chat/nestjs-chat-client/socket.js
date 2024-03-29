const socket = io('http://localhost:3000');

const message = document.getElemenById('message');
const messages = document.getElemenById('messages');

const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value });
}

socket.on('message', ({ data }) => {
  handleNewMessage(data);
});

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
}
