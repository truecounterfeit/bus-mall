'use strict';

function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}

var totalClicks = 0;

// declare images, create an array for all images

var bag = new Image('R2D2 Suitcase', './assets/bag.jpg');
var banana = new Image('Banana Slicer', './assets/banana.jpg');
var bathroom = new Image('iPad Bathroom Stand','./assets/bathroom.jpg');
var boots = new Image('Yellow Boots', './assets/boots.jpg');
var breakfast = new Image('Breakfast Maker', './assets/breakfast.jpg');
var bubblegum = new Image('Meatball Bubblegum', './assets/bubblegum.jpg');
var chair = new Image('Red Chair', './assets/chair.jpg');
var cthulhu = new Image('Cthulhu Action Figure', './assets/cthulhu.jpg');
var dogDuck = new Image ('Dog Duck Mask', './assets/dog-duck.jpg');
var dragon = new Image('Dragon Meat', './assets/dragon.jpg');
var pen = new Image('Eating-Utencil Pens', './assets/pen.jpg');
var petSweep = new Image('Pet Sweep Shoes', './assets/pet-sweep.jpg');
var scissors = new Image('Pizza Scissors', './assets/scissors.jpg');
var shark = new Image('Shark Sleeping Bag', './assets/shark.jpg');
var sweep = new Image('Baby Sweep Onezie', './assets/sweep.png');
var tauntaun = new Image('Tantuan Sleeping Bag', './assets/tauntaun.jpg');
var unicorn = new Image('Unicorn Meat', './assets/unicorn.jpg');
var usb = new Image('Tentical USB', './assets/usb.gif');
var waterCan = new Image('Water Gardening Can', './assets/water-can.jpg');
var wineGlass = new Image('Wine Glass', './assets/wine-glass.jpg');

var imagesArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

// var displayedImagesArray = [0, 1, 2];

// display random images

function randomImage() {
  //for (var i = 0; i < displayedImagesArray.length; i++)
  return imagesArray[Math.floor(Math.random() * imagesArray.length)];
}

// displayImages();
// declare global variables

var displayedRandomImage, displayedRandomImage2, displayedRandomImage3;
var lastdisplayedRandomImage, lastdisplayedRandomImage2, lastdisplayedRandomImage3;

function noDups() {
  displayedRandomImage = randomImage();
  displayedRandomImage2 = randomImage();
  displayedRandomImage3 = randomImage();
  displayedRandomImage.shown ++;
  displayedRandomImage2.shown ++;
  displayedRandomImage3.shown ++;

// while loops for no duplicates

  while (
    displayedRandomImage === displayedRandomImage2
    || displayedRandomImage === lastdisplayedRandomImage
    || displayedRandomImage === lastdisplayedRandomImage2
    || displayedRandomImage === lastdisplayedRandomImage3) {

    displayedRandomImage = randomImage();
    // console.log('here bro');
  }
  while (displayedRandomImage2 === displayedRandomImage3
    || displayedRandomImage2 === lastdisplayedRandomImage
    || displayedRandomImage2 === lastdisplayedRandomImage2
    || displayedRandomImage2 === lastdisplayedRandomImage3) {

    displayedRandomImage2 = randomImage();
    // console.log('here broski');
  }

  while (displayedRandomImage3 === displayedRandomImage
    || displayedRandomImage3 === lastdisplayedRandomImage
    || displayedRandomImage3 === lastdisplayedRandomImage2
    || displayedRandomImage3 === lastdisplayedRandomImage3) {

    displayedRandomImage3 = randomImage();
    // console.log('here');
  }
}

function displayImages() {

  noDups();

  lastdisplayedRandomImage = displayedRandomImage;
  lastdisplayedRandomImage2 = displayedRandomImage2;
  lastdisplayedRandomImage3 = displayedRandomImage3;

  var firstImgEl = document.getElementById('0');
  firstImgEl.innerHTML = '';
  var imageDataEl = document.createElement('IMG');
  imageDataEl.setAttribute('src', displayedRandomImage.path);
  imageDataEl.setAttribute('id', 0);
  firstImgEl.appendChild(imageDataEl);
  // console.log(firstImgEl);

  var secondImgEl = document.getElementById('1');
  secondImgEl.innerHTML = '';
  var imageDataEl = document.createElement('IMG');
  imageDataEl.setAttribute('src', displayedRandomImage2.path);
  imageDataEl.setAttribute('id', 1);
  secondImgEl.appendChild(imageDataEl);
  // console.log(secondImgEl);

  var thirdImgEl = document.getElementById('2');
  thirdImgEl.innerHTML = '';
  var imageDataEl = document.createElement('IMG');
  imageDataEl.setAttribute('src', displayedRandomImage3.path);
  imageDataEl.setAttribute('id', 2);
  thirdImgEl.appendChild(imageDataEl);
  // console.log(thirdImgEl);
  displayedRandomImageA = [displayedRandomImage, displayedRandomImage2, displayedRandomImage3];
}

// event listener for clicks

var idArray = ['first-image','second-image', 'third-image'];

var displayedRandomImageA;
console.log(displayedRandomImageA);

var firstImgEl = document.getElementById('0');
firstImgEl.addEventListener('click', runClicks);

var secondImgEl = document.getElementById('1');
secondImgEl.addEventListener('click', runClicks);

var thirdImgEl = document.getElementById('2');
thirdImgEl.addEventListener('click', runClicks);

//call display function click event that refreshes the page with new images and counts shown images

function runClicks(event) {
  event.preventDefault();
  console.log(totalClicks);
  displayedRandomImageA[event.target.id].clicked += 1;
  displayImages();

  console.log(imagesArray);

  totalClicks ++;

  // if (totalClicks == 25) results();

  if (totalClicks == 25) {
    console.log(totalClicks);
    results();
    // var removeEl = document.getElementById('uniqueID');
    // removeEl.removeChild(removeEl.lastChild);
    var firstImgEl = document.getElementById('0');
    firstImgEl.removeEventListener('click', runClicks);

    var secondImgEl = document.getElementById('1');
    secondImgEl.removeEventListener('click', runClicks);

    var thirdImgEl = document.getElementById('2');
    thirdImgEl.removeEventListener('click', runClicks);
  }
//print results
  function results() {
// list data
    for (var i = 0; i < imagesArray.length; i ++) {
      var resultsData = imagesArray[i].name + ' received ' + imagesArray[i].clicked + ' votes!';
      // console.log(resultsData);

      var resultsElement = document.createElement('li');
      resultsElement.textContent = resultsData;
      var listEl = document.getElementById('results');
      listEl.appendChild(resultsElement);
    }
    var context = document.getElementById('my-chart').getContext('2d');

  // chart for loop array

    //itemNames
    var chartNames = [];
    for (var i = 0; i < imagesArray.length; i++) {
      chartNames.push(imagesArray[i].name);
    }

    //dataSet
    var chartData = [];
    for (var i = 0; i < imagesArray.length; i++) {
      chartData.push(imagesArray[i].clicked);
    }

  //  var dataSet = chartData;
  //  var itemNames = chartNames;
    var chartColors = 'blue';
    console.log(chartNames);
    console.log(chartData);

    var myChart = new Chart(context, {
      type: 'bar',
      data: {
        labels: chartNames,
        datasets: [{
          label: '# of Votes',
          data: chartData,
          backgroundColor: chartColors
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
displayImages();
