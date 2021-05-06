var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cc7bb611-8390-4860-8124-a89c0d7d6a47","79c672b1-e968-4f10-8343-dcd84c2e0398","4e0a0a45-b783-40d0-bc6c-b951e76fad82","0b42d63f-026e-4700-8e6c-6c888435ef16","835f64ea-0e21-45ba-8c1b-f1d91c0480db","d3de9736-d618-4a30-8242-7694c4d7bc39","38c458f7-3fca-4dac-9193-a1adee5982dc","720cc33b-6056-48ec-91ba-9d9b22fa4c76"],"propsByKey":{"cc7bb611-8390-4860-8124-a89c0d7d6a47":{"name":"bow1","sourceUrl":null,"frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Srlh_vb9kKYUl0yNbXIxWlhTiTIMsmOS","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/cc7bb611-8390-4860-8124-a89c0d7d6a47.png"},"79c672b1-e968-4f10-8343-dcd84c2e0398":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"AFfwTcaGN0KjSOBpp6sqwRLsCk0uFj9B","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/79c672b1-e968-4f10-8343-dcd84c2e0398.png"},"4e0a0a45-b783-40d0-bc6c-b951e76fad82":{"name":"enemyk","sourceUrl":null,"frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"qdVRiwPLxzVPgYK0DQOPSoqtu4hkYpbf","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/4e0a0a45-b783-40d0-bc6c-b951e76fad82.png"},"0b42d63f-026e-4700-8e6c-6c888435ef16":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"qinhSIc8vovbEcki4zRKN1IRu3qiIXIf","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/0b42d63f-026e-4700-8e6c-6c888435ef16.png"},"835f64ea-0e21-45ba-8c1b-f1d91c0480db":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":".uiB.an39jmtI_.vLronLxUnm50xxdHA","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/835f64ea-0e21-45ba-8c1b-f1d91c0480db.png"},"d3de9736-d618-4a30-8242-7694c4d7bc39":{"name":"eburst","sourceUrl":"assets/api/v1/animation-library/gamelab/ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC/category_video_games/burst03.png","frameSize":{"x":398,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZmhHx6xgAvW1KUD6qlYQV_gjXX1CNiFC/category_video_games/burst03.png"},"38c458f7-3fca-4dac-9193-a1adee5982dc":{"name":"Arrow","sourceUrl":null,"frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"FZ6VtI9cChQgVDKrGWxP0YkXV9D3EQC2","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/38c458f7-3fca-4dac-9193-a1adee5982dc.png"},"720cc33b-6056-48ec-91ba-9d9b22fa4c76":{"name":"lifeline","sourceUrl":null,"frameSize":{"x":362,"y":336},"frameCount":1,"looping":true,"frameDelay":12,"version":"UHn_9bP7KoFmIjez6.skW1mfUZ6rVzC4","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":336},"rootRelativePath":"assets/720cc33b-6056-48ec-91ba-9d9b22fa4c76.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;
// creating bow 
var bow = createSprite(375,200,10,10);
bow.setAnimation("bow1");
bow.scale = 0.2;
// making score
var score = 0;
var eg1 = createGroup();
var eg2 = createGroup();
var eg3 = createGroup();
var egk = createGroup();
var ag = createGroup();
var lifeline = createSprite(350, 10);
lifeline.setAnimation("lifeline");
lifeline.scale = 0.05;
var lifeline2 = createSprite(330, 10);
lifeline2.setAnimation("lifeline");
lifeline2.scale = 0.05;
var lifeline3 = createSprite(310, 10);
lifeline3.setAnimation("lifeline");
lifeline3.scale = 0.05;
var edge = createSprite(440, 200, 1, 400);
var edge2 = createSprite(445, 200, 1, 400);
var edge3 = createSprite(450, 200, 1, 400);

function draw() {
background("white");
bow.y = World.mouseY;
if (gameState === PLAY){
if (World.frameCount % 50 === 0) {
ce = Math.round(random(1,10));

if (ce === 1 || ce === 2 || ce === 3 || ce === 4) {
ry1 = Math.round(random(50,350));
var e1 = createSprite(0, ry1);
e1.setAnimation("enemy1");
e1.scale = 0.1;
e1.velocityX = 2;
e1.lifetime = 220;
e1.setCollider("circle", 0, 0, 200);
eg1.add(e1);
} 
else if (ce === 5 || ce === 6 || ce === 7) {
ry2 = Math.round(random(50,350));
var e2 = createSprite(0, ry2);
e2.setAnimation("enemy2");
e2.scale = 0.1;
e2.velocityX = 2.5;
e2.lifetime = 220;
e2.setCollider("circle", 0, 0, 200);
eg2.add(e2);
} 
else if ((ce === 8 || ce === 9)) {
ry3 = Math.round(random(50,350));
var e3 = createSprite(0, ry3);
e3.setAnimation("enemy3");
e3.scale = 0.1;
e3.velocityX = 3;
e3.lifetime = 220;
e3.setCollider("circle", 0, 0, 200);
eg3.add(e3);
} 
else if (ce === 10) {
ryk = Math.round(random(50,350));
var ek = createSprite(0, ryk);
ek.setAnimation("enemyk");
ek.scale = 0.1;
ek.velocityX = 4;
ek.lifetime = 220;
ek.setCollider("circle", 0, 0, 200);
egk.add(ek);
}
}

if (keyWentDown("space")){
var arrow = createSprite(375, bow.y);
arrow.setAnimation("Arrow");
arrow.scale = 0.2;
arrow.velocityX = -8;
arrow.lifetime = 50;
ag.add(arrow);
arrow.setCollider("rectangle", 0, 0, 400, 50);
}

eg1.collide(ag,kille1);
eg2.collide(ag,kille2);
eg3.collide(ag,kille3);
egk.collide(ag,killek);
if (eg1.collide(edge) || eg2.collide(edge) || eg3.collide(edge) || egk.collide(edge)){
lifeline.destroy();
edge.destroy();
}
if (eg1.collide(edge2) || eg2.collide(edge2) || eg3.collide(edge2) || egk.collide(edge2)){
lifeline2.destroy();
edge2.destroy();
}
if (eg1.collide(edge3) || eg2.collide(edge3) || eg3.collide(edge3) || egk.collide(edge3)){
lifeline3.x = 500;
edge3.destroy();
}
if (lifeline3.x > 400){
gameState = END;
}
}
if (gameState === END){
eg1.destroyEach();
eg2.destroyEach();
eg3.destroyEach();
egk.destroyEach();
ag.destroyEach();
fill("black");
textSize(20);
text("GAME OVER",150,200);
}

drawSprites();
textSize(20);
fill("black");
text("Score:"+score,0,15);
}
function kille1(e1,arrow) {
  e1.setAnimation("eburst")
  e1.velocityX = 0;
  e1.velocityY = 0;
  e1.lifetime = 5;
  arrow.remove();
  score = score + 1;
}
function kille2(e2,arrow) {
  e2.setAnimation("eburst");
  e2.velocityX = 0;
  e2.velocityY = 0;
  e2.lifetime = 5;
  arrow.remove();
  score = score + 2;
}
function kille3(e3,arrow) {
  e3.setAnimation("eburst");
  e3.velocityX = 0;
  e3.velocityY = 0;
  e3.lifetime = 5;
  arrow.remove();
  score = score + 3;
}
function killek(ek,arrow) {
  ek.setAnimation("eburst");
  ek.velocityX = 0;
  ek.velocityY = 0;
  ek.lifetime = 5;
  arrow.remove();
  score = score + 4;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
