import graph from './graph.js';

const currentLocationImage = document.getElementById("current-location-image");
const leftLocationImage = document.getElementById("path-left-image");
const rightLocationImage = document.getElementById("path-right-image");

const pathLeftContainer = document.getElementById("path-left-container");
const pathRightContainer = document.getElementById("path-right-container");

function drawUI() {
  // draw current image:
  currentLocationImage.src = 'resources/images/' + graph[currentImage].image + '.png';

  // draw left image:
  leftLocationImage.src = 'resources/images/' + graph[currentImage].links[0] + '.png';
  rightLocationImage.src = 'resources/images/' + graph[currentImage].links[1] + '.png';

  pathLeftContainer.onclick = ev => {
    currentImage = graph[currentImage].links[0];
    drawUI();
  };

  pathRightContainer.onclick = ev => {
    currentImage = graph[currentImage].links[1];
    drawUI();
  };
}

let currentImage = 'forest';
drawUI();