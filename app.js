'use strict';

function ImageAnalytics(name, filepath, displayed, clicked) {
  this.name = name;
  this.filepath = filepath;
  this.displayed = 0;
  this.clicked = 0;
}

var r2d2Bag = new ImageAnalytics('R2D2 Bag', './images/bag', 0, 0);
var bananaSlicer = new ImageAnalytics('Banana Slicer', './images/banana.jpg', 0, 0);
var poopScreen = new ImageAnalytics('Bathroom Screen', './images/bathroom.jpg', 0, 0);
var boots = new ImageAnalytics('Yellow Boots', './images/bag', 0, 0);
var toaster = new ImageAnalytics('Breakfast Toaster', './images/bag', 0, 0);
var meatballs = new ImageAnalytics('Delicious Meatball Gum, Yum!', './images/bag', 0, 0);
var chair = new ImageAnalytics('Gorgeous Red Chair', './images/bag', 0, 0);
var cthulhu = new ImageAnalytics('Cthulhu Eats a Guy!', './images/bag', 0, 0);
var dogDuck = new ImageAnalytics('Duck Dog Muzzle', './images/bag', 0, 0);
var dragon = new ImageAnalytics('YUMMY dragon meat', './images/bag', 0, 0);
var pen = new ImageAnalytics('Office Cutlery', './images/bag', 0, 0);
var petSweep = new ImageAnalytics('Doggie Housework Helper', './images/bag', 0, 0);
var scissors = new ImageAnalytics('Pizza Slicer', './images/bag', 0, 0);
var shark = new ImageAnalytics('Sleep With the Fishes', './images/bag', 0, 0);
var sweep = new ImageAnalytics('Put Baby to WORK', './images/bag', 0, 0);
var taunTaun = new ImageAnalytics('Smells Worse Inside', './images/bag', 0, 0);
var unicorn = new ImageAnalytics('You\'re a Monster if You Eat This', './images/bag', 0, 0);
var usb = new ImageAnalytics('Slither', './images/bag', 0, 0);
var waterCan = new ImageAnalytics('Not Useless at ALL', './images/bag', 0, 0);
var wineGlass = new ImageAnalytics('Stylish', './images/bag', 0, 0);




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
  var randomArray = [];
  
  for (var i = 0; i < 3; i++) {
  randomArray.push(imagesArray[getRandomNumber()]);
  }

  console.log(getRandomNumber());
  left.src = randomArray[0];
  center.src = randomArray[1];
  right.src = randomArray[2];
}


getRandomImage();


