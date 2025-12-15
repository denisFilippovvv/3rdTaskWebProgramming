let count = 0;
const counterDisplay = document.getElementById('counterDisplay');
const increaseBtn = document.getElementById('increaseBtn');

increaseBtn.addEventListener('click', function() {
    count = count + 1;
    counterDisplay.textContent = `Счетчик: ${count}`;
});