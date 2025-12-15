const list = document.getElementById('myList');
const addButton = document.getElementById('addBtn');

let newItemCounter = 1;

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent = 'Нажато!';
        event.target.classList.add('clicked');   
    }
});

addButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = `Новый элемент ${newItemCounter}`;
    list.appendChild(newItem);
    newItemCounter++;
});

list.addEventListener('dblclick', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.remove('clicked');
        
        const originalTexts = [
            'Первый элемент списка',
            'Второй элемент списка', 
            'Третий элемент списка',
            'Четвертый элемент списка'
        ];
        
        if (originalTexts.includes(event.target.textContent)) {
        } else if (event.target.textContent === 'Нажато!') {
            event.target.textContent = 'Элемент списка';
        }
    }
});