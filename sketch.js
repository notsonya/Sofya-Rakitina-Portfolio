let picture;
let scale = 10;
let pictureWidth;
let pictureHeight;
let tilesX;
let tilesY;

function preload() {
  picture = loadImage("img/meow.png"); // Load your image
}

function setup() {
  // Set up the canvas to fill the entire window and give it an ID
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('backgroundCanvas'); // Assign ID for CSS and other purposes

  // Calculate the picture size based on canvas dimensions
  pictureHeight = height/1.5; // Use full height
  pictureWidth = width/1.5; // Use full width

  tilesX = Math.floor(pictureWidth / scale);
  tilesY = Math.floor(pictureHeight / scale);
  
  // Resize the image to fit the number of tiles
  picture.resize(tilesX, tilesY);

  textAlign(CENTER);
  textSize(10);
}

function draw() {
  background(220); // Background color

  // Calculate the tile width and height based on canvas size
  let tileWidth = width / tilesX;
  let tileHeight = height / tilesY;

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let pixel = picture.get(x, y);
      let color = brightness(pixel);

      let char = "meow"; // Default character to draw

      // Adjust character based on brightness
      if (color < 80) {
        char = ".";
      }
      if (color < 60) {
        char = "░";
      }
      if (color < 40) {
        char = "▓";
      }
      if (color < 20) {
        char = "-";
      }

      // Draw the character at the correct position
      fill(0); // Set text color (black)
      text(char, x * tileWidth + tileWidth / 2, y * tileHeight + tileHeight / 2);
    }
  }
}

// Optional: Handle window resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Recalculate the number of tiles and the picture size when the window is resized
  tilesX = Math.floor(width / scale);
  tilesY = Math.floor(height / scale);
  picture.resize(tilesX, tilesY);
}
