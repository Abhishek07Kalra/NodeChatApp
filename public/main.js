const socket = io('/');
document.getElementById('cardhead').innerHTML += roomid;
document.getElementById('but').addEventListener('click', () => {
  var msg = document.getElementById('input').value;
  socket.emit('sendMessage', msg, roomid);
  var list = document.createElement('li');
  list.innerHTML = msg;
  list.classList.add('li2');
  document.getElementById('listItem').append(list);
  document.getElementById('input').value = "";
})

socket.emit('joinUser', roomid);

socket.on('messageReceived', msg => {
  var list = document.createElement('li');
  list.innerHTML = msg;
  list.classList.add('li1');
  document.getElementById('listItem').append(list);
})