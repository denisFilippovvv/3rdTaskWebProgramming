const textElement = document.getElementById('colorText');
const selectElement = document.getElementById('colorSelect');

selectElement.addEventListener('change', function() {
    const selectedColor = selectElement.value;
    
    if (selectedColor) {
        textElement.style.color = selectedColor;
        
        textElement.style.borderColor = selectedColor;
        
        console.log('Выбран цвет:', selectedColor);
    } else {
        textElement.style.color = '';
        textElement.style.borderColor = '';
    }
});