'use strict';

// var firstImgEl = document.getElementsByClassName('first-image')[0];
// var secondImgEl = document.getElementsByClassName('second-image')[0];
// var thirdImgEl = document.getElementsByClassName('third-image')[0];

function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}

// var photos = {
//   new Image();
//   new Image();
// }

// declare images, create an array for all images

var bag = new Image('bag', './assets/bag.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var bathroom = new Image('bathroom','./assets/bathroom.jpg');
var boots = new Image('boots', './assets/boots.jpg');
var breakfast = new Image('breakfast', './assets/breakfast/jpg');
var bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
var chair = new Image('chair', './assets/chair.jpg');
var cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
var dogDuck = new Image ('dog duck', './assets/dog-duck.jpg');
var dragon = new Image('dragon', './assets/dragon.jpg');
var pen = new Image('pen', './assets/pen.jpg');
var petSweep = new Image('pet sweep', './assets/pet-sweep.jpg');
var scissors = new Image('scissors', './assests/scissors.jpg');
var shark = new Image('shark', './assets/shark.jpg');
var sweep = new Image('sweep', './assets/sweep.png');
var tauntaun = new Image('tantuan', './assets/tauntaun.jpg');
var unicorn = new Image('unicorn', './assets/unicorn.jpg');
var usb = new Image('usb', './assests/usb.gif');
var waterCan = new Image('water can', './assets/water-can.jpg');
var wineGlass = new Image('water glass', './assets/wine-glass.jpg');

var imagesArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var displayedImagesArray = [0, 1, 2];

// display random images

function randomImage() {
  var x  = imagesArray[Math.floor(Math.random() * imagesArray.length)];
  return x;
}

var displayedRandomImage = randomImage();
console.log(displayedRandomImage);

// var firstImgEl = document.getElementsByClassName('first-image')[0];
// console.log(firstImgEl);
// var imageDataEl = document.createElement('IMG');
// imageDataEl.setAttribute('src', displayedRandomImage.path);
// console.log(imageDataEl);
// firstImgEl.appendChild(imageDataEl);
// console.log(firstImgEl);
var turn = 0;
for (var i = 0; i < 3; i++) {
  var firstImgEl = document.getElementsByClassName('first-image')[0];
  var imageDataEl = document.createElement('IMG');
  imageDataEl.setAttribute('src', displayedRandomImage.path);
  firstImgEl.appendChild(imageDataEl);
  turn ++;
  console.log(turn);
}
// } while (imageDataEl = imagesArray.indexOf(imageDataEl)) {
//   turn = turn - 1;
// }

// indexOf to check for duplicates

// var imageDataEl = document.createElement('IMG');
// imageDataEl.src = displayedRandomImage.path;
// secondImgEl.appendChild(imageDataEl.src);
// console.log(secondImgEl);
//
// var secondImgEl = document.getElementsByClassName('second-image')[1];
//
// var imageDataEl = document.createElement('IMG');
// imageDataEl.src = displayedRandomImage.path;
// thirdImgEl.appendChild(imageDataEl.src);
// console.log(thirdImgEl);
// var thirdImgEl = document.getElementsByClassName('third-image')[2];

// var displayImageArrayEl = [firstImgEl, secondImgEl, thirdImgEl];
// var displayImageArrayEl = document.getElementById('generate-images');

//random image fucntion
//var randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

// event listener for clicks

//clear image to get 25 selections

// if else for duplicates, when clicked, count clicks

//print results
