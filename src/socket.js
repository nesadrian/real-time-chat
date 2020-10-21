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
    const li = document.createElement("li");
    li.textContent = username + ": " + msg;
    document.querySelector(".messages-list-container").appendChild(li);
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