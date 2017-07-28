attachListener = () => {

    const messages = document.querySelectorAll('._3oh- ._58nk');
    console.log(messages);

    messages.forEach(message => {
        message.addEventListener('click', (e) => {
            console.log(e.target.innerHTML);
        })
    });

};

setTimeout(() => {
    attachListener();
    const messageArea = document.querySelector('#js_1');
    messageArea.addEventListener('load', attachListener);
}, 4000);
