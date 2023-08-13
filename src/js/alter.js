import throttle from 'lodash.throttle';
const elements = {
    form: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('input[name="email"]'),
    messageInput: document.querySelector('textarea[name="message"]'),
};

restoreFormData();
elements.form.addEventListener('input', throttle(handlerInput, 500));
elements.form.addEventListener('submit', handleSubmit);

function handlerInput() {
    const formData = {
        email: elements.emailInput.value,
        message: elements.messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(evt) {
    evt.preventDefault();
    const formData = {
        email: elements.emailInput.value,
        message: elements.messageInput.value,
    };
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    elements.emailInput.value = '';
    elements.messageInput.value = '';
}

function restoreFormData() {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    elements.emailInput.value = savedFormData.email || '';
    elements.messageInput.value = savedFormData.message || '';
}