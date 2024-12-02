var global = global || window;
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  if (form) {
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const formData = {
      email: '',
      message: '',
    };

    // Завантажити збережені дані з локального сховища
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      emailInput.value = parsedData.email;
      messageInput.value = parsedData.message;
      formData.email = parsedData.email;
      formData.message = parsedData.message;
    }

    // Обробник події input
    form.addEventListener('input', event => {
      const { name, value } = event.target;
      formData[name] = value;
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    // Обробник події submit
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
      }
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      form.reset();
      formData.email = '';
      formData.message = '';
    });
  }
});
