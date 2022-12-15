// const _throttle = require('lodash.throttle');
import _throttle from 'lodash.throttle';

let feedbackFormState = {
  email: '',
  message: '',
};
if (!localStorage.getItem('feedback-form-state')) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

const form = document.querySelector('.feedback-form');
form.addEventListener('input', _throttle(onInputChange, 500));
form.addEventListener('submit', onSubmit);

// you have to fill every fields
form.elements.email.required = 'true';
form.elements.message.required = 'true';

onFormUpdate();
// fill in form fields if any data in localStorage avialable from previous session
function onFormUpdate() {
  feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

  form.elements.email.value = feedbackFormState.email;
  form.elements.message.value = feedbackFormState.message;

  // console.log('onFormUpdate->feedbackFormState :>> ', feedbackFormState);
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

  const submitData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('submitData :>> ', submitData);

  // clean up localStorage form fields
  feedbackFormState.email = '';
  feedbackFormState.message = '';
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
  // clean up whole localStorage including vimeo player page
  // localStorage.clear();
  // ---------------------------------

  e.currentTarget.reset();
}
