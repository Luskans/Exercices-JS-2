let input = document.querySelector('#lastname');
input.addEventListener('focusout', boxPopUp);

function boxPopUp() {
    /*let body = document.querySelector('body');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = '<p>*"Merci de votre participation !"*</p>';
    body.appendChild(newDiv);*/
    alert('*"Merci de votre participation !"*')
}