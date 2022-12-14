const _throttle = require('lodash.throttle');

let feedbackFormState = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', _throttle(onInputChange, 500));
form.addEventListener('submit', onSubmit);

onFormUpdate();

function onFormUpdate() {
  feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

  form.elements.email.value = feedbackFormState.email;
  form.elements.message.value = feedbackFormState.message;

  //   console.log('onFormUpdate->feedbackFormState :>> ', feedbackFormState);
}

function onInputChange() {
  feedbackFormState.email = form.elements.email.value;
  feedbackFormState.message = form.elements.message.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
  //   console.log('onInputChange->feedbackFormState :>> ', feedbackFormState);
}

function onSubmit(e) {
  e.preventDefault();
  console.log('savedFormState :>> ', feedbackFormState);
  feedbackFormState.email = '';
  feedbackFormState.message = '';
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
  e.currentTarget.reset();
}
