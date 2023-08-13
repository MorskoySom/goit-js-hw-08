import throttle from 'lodash.throttle';

const elements = {
    form: document.querySelector('.feedback-form'),
    messageInput: document.querySelector('.feedback-form textarea'),
};

elements.form.addEventListener('input', throttle(handlerInput, 500));
elements.form.addEventListener('submit', handleSubmit);
elseList();

const FormData = {};
function handlerInput(evt) {
    FormData[evt.target.name] = evt.target.value;
    console.log(FormData);
    localStorage.setItem('feedback-form-state', JSON.stringify(FormData));
}

function handleSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem('feedback-form-state');
}

function elseList() {
    const objToGet = localStorage.getItem('feedback-form-state');
    if (objToGet) {
        elements.messageInput.value = objToGet;
    }
}


