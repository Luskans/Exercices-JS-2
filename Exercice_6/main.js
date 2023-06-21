let imagesArray = document.querySelectorAll('img');
imagesArray.forEach(image => {
    image.addEventListener('mouseover', () => {
        console.log(image);
        image.src = image.src.replace('.jpg', '_2.jpg');
    });
    image.addEventListener('mouseout', () => {
        image.src = image.src.replace('_2.jpg', '.jpg'); 
    });;
});