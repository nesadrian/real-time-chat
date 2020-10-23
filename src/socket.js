const socket = io();
const messageInput = document.querySelector(".messages-input");
const messageForm = document.querySelector(".messages-form");
 
messageForm.onsubmit = (e) => { 
    e.preventDefault();
    if(messageInput.value) {
        socket.emit('message', messageInput.value);
        messageInput.value = '';
    }
};

socket.on('message', (msg, username) => {
    const msgContainer = document.createElement("div");
    msgContainer.className = "messages-text-container-self messages-text-container"
    msgContainer.textContent = msg;
    const msgListContainer = document.querySelector(".messages-list-container");
    msgListContainer.insertBefore(msgContainer, msgListContainer.lastChild);
});

//const loginButton = document.getElementById("login-button");
/*loginButton.addEventListener('click', () => {
    const username = prompt("Enter username");
    socket.emit("adduser", username);
    messageForm.style.display = 'block';
    loginButton.style.display = 'none';
})*/ 

// const userListElement = document.getElementById("user-list");
// socket.on('updateUserlist', userList => {
//     userListElement.innerHTML = null || "";
//     for(user in userList) {
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(userList[user]));
//         userListElement.appendChild(li);
//     }
// });