const form = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageDiv = document.getElementById('messageDiv');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    messageDiv.textContent = '';
    messageDiv.className = '';
    
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    
    if (nameValue === '' && emailValue === '') {
        messageDiv.textContent = 'Ошибка: заполните все поля!';
        messageDiv.classList.add('error');
        return;
    }
    
    if (nameValue === '') {
        messageDiv.textContent = 'Ошибка: поле "Имя" не может быть пустым!';
        messageDiv.classList.add('error');
        return;
    }
    
    if (emailValue === '') {
        messageDiv.textContent = 'Ошибка: поле "Email" не может быть пустым!';
        messageDiv.classList.add('error');
        return;
    }
    
    messageDiv.textContent = 'Форма успешно отправлена!';
    messageDiv.classList.add('success');
    
    const formData = new FormData(form);
    
    console.log('Данные формы:');
    console.log('Имя:', nameValue);
    console.log('Email:', emailValue);
    
    for (let [key, value] of formData.entries()) {
        console.log(key + ':', value);
    }
    
    nameInput.value = '';
    emailInput.value = '';
});