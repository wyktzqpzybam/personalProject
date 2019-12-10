
const numberOfImages = 12;
let currentImageIndex = 1;
let path ="../Assets/HobbyImages/";

function changeImage(index) {
    document.querySelector(".center-image img").src= path + index + ".jpg";
}

function changeImageForward() {
    if (currentImageIndex + 1 <= numberOfImages) 
        currentImageIndex++;
        else currentImageIndex = 1;
    changeImage(currentImageIndex);
}

function changeImageBackward() {
    if (currentImageIndex - 1 != 0) 
        currentImageIndex--;
        else currentImageIndex = numberOfImages ;
    changeImage(currentImageIndex);
}

changeImage(currentImageIndex);