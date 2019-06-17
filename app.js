'use strict';

var image = document.getElementById('img1');
img1.addEventListener('click', getRandomImage);

var imagesArray = [
  'images/bag.jpg',
  'images/banana.jpg',
  'images/bathroom.jpg',
  'images/boots.jpg',
  'images/breakfast.jpg',
  'images/bubblegum.jpg',
  'images/chair.jpg',
  'images/cthulhu.jpg',
  'images/dog-duck.jpg',
  'images/dragon.jpg',
  'images/pen.jpg',
  'images/pet-sweep.jpg',
  'images/scissors.jpg',
  'images/shark.jpg',
  'images/sweep.png',
  'images/tauntaun.jpg',
  'images/unicorn.jpg',
  'images/usb.gif',
  'images/water-can.jpg',
  'images/wine-glass.jpg',
];

console.log(imagesArray);

function getRandomImage() {
  var randomImageIndex = Math.floor(Math.random()*imagesArray.length);
  var imageSource = imagesArray[randomImageIndex];
  img1.src = imageSource;
}

getRandomImage(img1);
getRandomImage(img2);
getRandomImage(img3);