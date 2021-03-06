// eslint-disable-next-line no-undef
const socket = io();
const messageInput = document.querySelector('.messages-form_input');
const messageForm = document.querySelector('.messages-form');

const usernameSelf = Math.random();
socket.emit('adduser', usernameSelf);

messageForm.onsubmit = e => {
    e.preventDefault();
    if (messageInput.value) {
        socket.emit('message', messageInput.value);
        messageInput.value = '';
    }
};

socket.on('message', (msg, username) => {
    const msgContainer = document.createElement('div');
    if (usernameSelf === username) {
        msgContainer.className = 'messages-text messages-text--self';
    } else {
        msgContainer.className = 'messages-text messages-text--other';
    }
    msgContainer.textContent = `${username}: ${msg}`;
    const msgListContainer = document.querySelector('.messages-list');
    msgListContainer.appendChild(msgContainer);
});

// const loginButton = document.getElementById("login-button");
/* loginButton.addEventListener('click', () => {
    const username = prompt("Enter username");
    socket.emit("adduser", username);
    messageForm.style.display = 'block';
    loginButton.style.display = 'none';
}) */

// const userListElement = document.getElementById("user-list");
// socket.on('updateUserlist', userList => {
//     userListElement.innerHTML = null || "";
//     for(user in userList) {
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(userList[user]));
//         userListElement.appendChild(li);
//     }
// });
