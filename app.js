'use strict';


var left = document.getElementById('img1');
img1.addEventListener('click', getRandomImage);

var center = document.getElementById('img2');
img2.addEventListener('click', getRandomImage);

var right = document.getElementById('img3');
img3.addEventListener('click', getRandomImage);


var imagesArray = [
  './images/bag.jpg',
  './images/banana.jpg',
  './images/bathroom.jpg',
  './images/boots.jpg',
  './images/breakfast.jpg',
  './images/bubblegum.jpg',
  './images/chair.jpg',
  './images/cthulhu.jpg',
  './images/dog-duck.jpg',
  './images/dragon.jpg',
  './images/pen.jpg',
  './images/pet-sweep.jpg',
  './images/scissors.jpg',
  './images/shark.jpg',
  './images/sweep.png',
  './images/tauntaun.jpg',
  './images/unicorn.jpg',
  './images/usb.gif',
  './images/water-can.jpg',
  './images/wine-glass.jpg',
];

console.log(imagesArray);

function getRandomNumber() {
    return Math.floor(Math.random()*imagesArray.length);
}


function getRandomImage() {
  var imageSource = imagesArray[getRandomNumber()];
  console.log(getRandomNumber());
  left.src = imageSource;
  center.src = imageSource;
  right.src = imageSource;
}


getRandomImage();


