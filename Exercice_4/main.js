let resetButton = document.querySelector('button');
let inputs = document.querySelectorAll('input');
resetButton.addEventListener('click', refreshBoxes);

function refreshBoxes() {
    inputs.forEach(function(input) {
        input.value = '';
    });
};