const divElement = document.getElementById('myDiv');
const buttonElement = document.getElementById('toggleBtn');

buttonElement.addEventListener('click', function() {
    divElement.classList.toggle('highlight');
});