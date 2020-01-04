const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); // Stop from submitting form to somewhere.

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    // Convert the value in the input into the encrypted vale 
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);
    const linkiInput = document.querySelector('#link-input')
    linkiInput.value =  `${window.location}#${encrypted}`;
    linkiInput.select();
    

});

