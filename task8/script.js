const block = document.getElementById('myBlock');
const button = document.getElementById('toggleBtn');

button.addEventListener('click', function() {
    block.classList.toggle('hidden');
    
    if (block.classList.contains('hidden')) {
        button.textContent = 'Показать блок';
    } else {
        button.textContent = 'Скрыть блок';
    }
});