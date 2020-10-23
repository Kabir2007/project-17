  var monkey , monkey_running;
  var banana ,bananaImage, obstacle, obstacleImage;
  var foodGroup, obstacleGroup;
  var score;
  var ground;

  function preload(){


  monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");

  obstacleImage = loadImage("obstacle.png");

  }

  function setup() {

  createCanvas(500,400);

  score = 0;

  monkey = createSprite(80,320,10,10);
  monkey.addAnimation("monkey running",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(150,350,1000,8);

  obstacleGroup = new Group();

  foodGroup = new Group();

  }

  function draw() {

  background(rgb(184, 206, 245));

  score = score + Math.round(getFrameRate()/60);

  fill(rgb(245, 13, 5));
  textSize(16);
  text("Survival Time :  " + score , 320 , 20);

  console.log(score);

  ground.velocityX = -5;

  if(ground.x < 0 ){

  ground.x = ground.width/2;

  }

  monkey.collide(ground);

  monkey.velocityY = monkey.velocityY + 1;

  if(keyDown("space")&&monkey.y >= 310){

  monkey.velocityY = -16;

  }

  spawnObstacles();

  spawnFood();

  drawSprites();

  }

  function spawnObstacles(){

  if(frameCount % 130 === 0){

  obstacle = createSprite(510,325);
  obstacle.addImage("image",obstacleImage);
  obstacle.scale = 0.12;
  obstacle.velocityX = -(6 + score/100);
  obstacle.lifetime = 90;

  obstacleGroup.add(obstacle);

  }

  }

  function spawnFood(){

  if(frameCount % 80 === 0){

  bananas = createSprite(510,Math.round(random(140,250)));
  bananas.addImage("banana",bananaImage);
  bananas.scale = 0.1;
  bananas.lifetime = 90;
  bananas.velocityX = -(5 + score/100);

  foodGroup.add(bananas);

  }

  }