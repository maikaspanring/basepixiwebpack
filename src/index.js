import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

import { PIXI, Application, Assets, Sprite } from 'pixi.js';

import DarkTexture01 from './img/PrototypeTextures/Dark/texture_01.png';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// Resize the canvas to fit the window whenever it is resized
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});

// load the texture we need
const texture = await Assets.load(DarkTexture01);

// This creates a texture from a 'bunny.png' image
const bunny = new Sprite(texture);

// Setup the position of the bunny
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

// Rotate around the center
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

bunny.scale.x = 0.5;
bunny.scale.y = 0.5;

// Add the bunny to the scene we are building
app.stage.addChild(bunny);

// Listen for frame updates
app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    bunny.rotation += 0.01;
});