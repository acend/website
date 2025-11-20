export default function() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    //console.log(formData);
    //console.log(new URLSearchParams(formData).toString());


    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })

      .then(response => {

        if (response.ok) {
          myForm.classList.add('d-none');

          myForm.parentElement.querySelector('.message-success').classList.remove('d-none');
          myForm.parentElement.querySelector('.message-error').classList.add('d-none');

        }else{
          myForm.parentElement.querySelector('.message-success').classList.add('d-none');
          myForm.parentElement.querySelector('.message-error').classList.remove('d-none');
          throw Error(response.statusText);
          }
      })
      .catch((error) => alert(error));
  };


  const forms = document.querySelectorAll('.form-wrap form');

  if (forms.length > 0) {
    forms.forEach(form => {
      form.addEventListener('submit', handleSubmit);
    });
  }
}
