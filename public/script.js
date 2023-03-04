const socket = io();

const btn = document.getElementById("btn");
const inputMsg = document.getElementById("newmsg");
const msgList = document.getElementById("msglist");

btn.addEventListener("click", () => {
  socket.emit("msg_send", {
    msg: inputMsg.value,
  });
});

socket.on("msg_rcvd", (data) => {
  let limsg = document.createElement("li");
  limsg.innerHTML = data.msg;
  msgList.appendChild(limsg);
});
