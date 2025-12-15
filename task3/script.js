const list = document.getElementById('itemList');
const input = document.getElementById('itemInput');
const button = document.getElementById('addBtn');

button.addEventListener('click', function() {
    const text = input.value.trim();
    
    if (text === '') {
        alert('Поле не может быть пустым!');
        return;
    }
    
    const newItem = document.createElement('li');    
    newItem.textContent = text;
    list.appendChild(newItem);
    input.value = '';
});