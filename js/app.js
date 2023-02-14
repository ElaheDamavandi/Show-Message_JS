const form = document.querySelector('#message-form');
const inputElement = document.getElementById('message');
const lastMessage = document.getElementById('lastMessage');
let message = '';

const showLastMessage = (e) => {
    // prevent the form's default submission action
    e.preventDefault();

    message = inputElement.value;
    lastMessage.textContent = message;
    console.log('inputElement.value');
};

form.addEventListener('submit', showLastMessage);
