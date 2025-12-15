const list = document.getElementById('myList');
const button = document.getElementById('removeBtn');

function updateButtonState() {
    if (list.children.length === 0) {
        button.disabled = true;
        button.textContent = 'Список пуст';
    } else {
        button.disabled = false;
        button.textContent = 'Удалить последний пункт';
    }
}

updateButtonState();

button.addEventListener('click', function() {
    const lastItem = list.lastElementChild;
    
    if (lastItem) {
        list.removeChild(lastItem);
    }
    
    updateButtonState();
});