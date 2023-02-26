const form = document.querySelector('.login-form');

const handlerFormSubmit = event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  let data;

  if (
    event.currentTarget.elements.email.value !== '' &&
    event.currentTarget.elements.password.value !== ''
  ) {
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    data = {
      email,
      password,
    };
    event.currentTarget.reset();
  } else {
    alert('Заповніть будьласка всі поля!');
  }

  //   formData.forEach((value, name) => {
  //     if (value === '') {
  //       alert(`Заповніть будьласка поле "${name}" !`);
  //     } else {
  //     }
  //   });
  console.log(data);
};

form.addEventListener('submit', handlerFormSubmit);
