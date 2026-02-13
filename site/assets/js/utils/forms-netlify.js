export default function() {

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const myForm = event.target;
    const formData = new FormData(myForm);

    // console.log('Form submission intercepted, posting to:', '/');
    // console.log('Form data:', new URLSearchParams(formData).toString());

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(response => {
        console.log('Response status:', response.status);
        if (response.ok) {
          myForm.classList.add('d-none');
          myForm.parentElement.querySelector('.message-success').classList.remove('d-none');
          myForm.parentElement.querySelector('.message-error').classList.add('d-none');
        } else {
          myForm.parentElement.querySelector('.message-success').classList.add('d-none');
          myForm.parentElement.querySelector('.message-error').classList.remove('d-none');
          throw Error(response.statusText);
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert(error);
      });

    return false;
  };


  const forms = document.querySelectorAll('.form-wrap form');
  // console.log("forms lengs: " + forms.length);

  if (forms.length > 0) {
    forms.forEach(form => {
      // Skip if listener already attached (prevents duplicate submissions on Swup page transitions)
      if (form.dataset.netlifyListenerAttached === 'true') {
        return;
      }
      form.dataset.netlifyListenerAttached = 'true';
      form.addEventListener('submit', handleSubmit);
    });
  }
}
