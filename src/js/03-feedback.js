import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener(
  'input',
  throttle(() => {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email, message })
    );
  }),
  500
);

window.addEventListener('load', () => {
  const state = localStorage.getItem('feedback-form-state');
  if (state) {
    const { email, message } = JSON.parse(state);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
});
