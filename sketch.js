var spaceShip, spaceShipImg;
var enemy1, enemy2, enemy3, enemy4;
var enemy1Img, enemy2Img, enemy3Img, enemy4Img;
var life = 3;
var lifeImg, lostLifeImg, fire, fireImg;
var bgImg;
var bullet, bulletImg;

function preload() {
    spaceShipImg = loadImage("player1.png");
    enemy1Img = loadImage("enemy1.png");
    enemy2Img = loadImage("enemy2.png");
    enemy3Img = loadImage("enemy3.png");
    enemy4Img = loadImage("enemy4.png");
    // fireImg = loadImage(".png");
    lifeImg = loadImage("life1.png");
    lostLifeImg = loadImage("life4.png");
    bgImg = loadImage("background.jpg");
    bulletImg = loadImage("fire.png");

}

function setup() {
    createCanvas(800, 600);
    spaceShip = createSprite(400, 520, 50, 50);
    spaceShip.addImage(spaceShipImg);
    spaceShip.scale = 2;

    life = createSprite(600, 20, 50, 50);
    life.addImage(lifeImg);
    life.scale = 0.01;

}

function draw() {
    background(bgImg);

    if (keyDown(LEFT_ARROW)) {
        spaceShip.x -= 5;
    }

    if (keyDown(RIGHT_ARROW)) {
        spaceShip.x += 5;
    }

    drawSprites();
    spawnEnemies();
    spawnFire();
}

function spawnEnemies() {
    if (frameCount % 150 === 0) {
        enemy1 = createSprite(Math.round(random(10, 590)), 0, 50, 50);
        enemy1.addImage(enemy1Img);
        enemy1.velocityY = 3.5;
        enemy1.scale = 1.8;
        enemy1.lifeTime = 200;
    }

    if (frameCount % 200 === 0) {
        enemy2 = createSprite(Math.round(random(10, 590)), Math.round(random(0, 100)), 50, 50);
        enemy2.addImage(enemy2Img);
        if (enemy2.x <= 400) {
            enemy2.velocityX = 2;
            enemy2.velocityY = 3;
        } else {
            enemy2.velocityX = -2;
            enemy2.velocityY = 3;
        }
        enemy2.scale = 1.8;
        enemy2.lifeTime = 200;
    }

    if (frameCount % 300 === 0) {
        enemy3 = createSprite(Math.round(random(10, 590)), 0, 50, 50);
        enemy3.addImage(enemy3Img);
        enemy3.velocityY = 3;
        enemy3.scale = 1.8;
        enemy3.lifeTime = 200;

    }
    if (frameCount % 450 === 0) {
        enemy4 = createSprite(Math.round(random(50, 590)), 0, 50, 50);
        enemy4.addImage(enemy4Img);
        if (enemy4.x <= 400) {
            enemy4.velocityX = 3;
            enemy4.velocityY = 3;
        } else {
            enemy4.velocityX = -3;
            enemy4.velocityY = 3;
        }
        enemy4.scale = 1.8;
        enemy4.lifeTime = 200;
    }
}

function spawnFire() {
    if (keyDown(32)) {
        if (frameCount % 8 === 0) {
            bullet = createSprite(spaceShip.x, spaceShip.y);
            bullet.addImage(bulletImg);
            bullet.velocityY = -3;
            bullet.scale = 0.3;
            spaceShip.depth += bullet.depth;
        }
    }
}