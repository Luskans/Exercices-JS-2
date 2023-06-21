let firstImage = document.querySelector('img');
firstImage.addEventListener('mouseover', changeImageOnHover);
firstImage.addEventListener('mouseout', changeImageOnOut);

function changeImageOnHover() {
    firstImage.src = "./images/image1_2.jpg"
}

function changeImageOnOut() {
    firstImage.src = "./images/image1.jpg"
}