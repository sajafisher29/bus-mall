'use strict';

function ImageAnalytics(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.displayed = 0;
  this.clicked = 0;
  ImageAnalytics.imageDatabase.push(this);
}

ImageAnalytics.imageDatabase = [];

//CHANGE FILE PATH
var r2d2Bag = new ImageAnalytics('R2D2 Bag', 'images/bag.jpg');
var bananaSlicer = new ImageAnalytics('Banana Slicer', 'images/banana.jpg');
var poopScreen = new ImageAnalytics('Bathroom Screen', './images/bathroom.jpg');
var boots = new ImageAnalytics('Yellow Boots', './images/boots.jpg');
var toaster = new ImageAnalytics('Breakfast Toaster', './images/breakfast.jpg');
var meatballs = new ImageAnalytics('Delicious Meatball Gum, Yum!', './images/bubblegum.jpg');
var chair = new ImageAnalytics('Gorgeous Red Chair', './images/chair.jpg');
var cthulhu = new ImageAnalytics('Cthulhu Eats a Guy!', './images/cthulhu.jpg');
var dogDuck = new ImageAnalytics('Duck Dog Muzzle', './images/dog-duck.jpg');
var dragon = new ImageAnalytics('YUMMY dragon meat', './images/dragon.jpg');
var pen = new ImageAnalytics('Office Cutlery', './images/pen.jpg');
var petSweep = new ImageAnalytics('Doggie Housework Helper', './images/pet-sweep.jpg');
var scissors = new ImageAnalytics('Pizza Slicer', './images/scissors.jpg');
var shark = new ImageAnalytics('Sleep With the Fishes', './images/shark.jpg');
var sweep = new ImageAnalytics('Put Baby to WORK', './images/sweep.png');
var taunTaun = new ImageAnalytics('Smells Worse Inside', './images/tauntaun.jpg');
var unicorn = new ImageAnalytics('You\'re a Monster if You Eat This', './images/unicorn.jpg');
var usb = new ImageAnalytics('Slither', './images/usb.gif');
var waterCan = new ImageAnalytics('Not Useless at ALL', './images/water-can.jpg');
var wineGlass = new ImageAnalytics('Stylish', './images/wine-glass.jpg');

console.log(ImageAnalytics.imageDatabase);

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

function getRandomNumber() {
  return Math.floor(Math.random()*ImageAnalytics.imageDatabase.length);
}

function getRandomImage() {
  var randomArray = [];

  for (var i = 0; i < 3; i++) {
    randomArray.push(ImageAnalytics.imageDatabase[getRandomNumber()].filepath);
  }

  console.log(getRandomNumber());
  left.src = randomArray[0];
  center.src = randomArray[1];
  right.src = randomArray[2];
}

getRandomImage();

//Array to hold the past six randomly generated unique images
var pastImages = [];

//Generate a random photo (getRandomImage)
//Check it against the pastImages array
//If it is not a duplicate push it into the array
//While pastImages.length is less than 6 push only
//After while is no longer true push to the end of the array and cut pastImages[0]

//On the 25th click remove the images, stop the click counter, and show the data
