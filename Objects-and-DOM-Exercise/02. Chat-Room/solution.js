function solve() {
    let sendButton = document.getElementById('send');
    sendButton.addEventListener('click', sendMessage);
    let mainDivElement = document.getElementById('chat_messages');

    function sendMessage() {
        let message = document.getElementById('chat_input').value;
        let divElement = document.createElement('div');
        divElement.className = 'message my-message';
        divElement.textContent = message;
        mainDivElement.appendChild(divElement);
        document.getElementById('chat_input').value = '';
    }
}

