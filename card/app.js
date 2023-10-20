document.addEventListener('DOMContentLoaded', function() {

const changeInput = document.getElementById('changeCard');
const header = document.querySelector('.card header');
const footer = document.querySelector('.card footer');

changeInput.addEventListener('input', function() {
    const selectedColor = changeInput.value;
    header.style.backgroundColor = selectedColor;
    footer.style.backgroundColor = selectedColor;
    });
});

