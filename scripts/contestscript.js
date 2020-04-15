/*
    font - https://fonts.google.com/specimen/VT323
    count milliseconds+=how many milliseconds is one frame in 60ps
    translate that to score (one point every 250ms?)
    raise speed as score increases
    one pickup = 100 points
*/
//GLOBAL VARIABLES
var STARTING_SPEED = 3;
var currentSpeed = STARTING_SPEED;
var score = 0;
/* game state variables */
var isStarted = false; //if the game has passed the startup screen
var isDead = false; //if the player has died and is waiting to respawn
var boatImage = new Image();
boatImage.src = "images/boat1.png"; //image for boat
var rockImage = new Image();
rockImage.src = "images/rock1.png"; //image for rock obstacles
var fishImage = new Image();
fishImage.src = "images/fish.png"; //image for golden fish


/**********CLASSES**********/

class Enemy {
    enemyXPos;
    enemyYPos;
    enemyXVelocity;
    isAlive;

    constructor() {
        this.enemyXPos = WIDTH;
        this.enemyYPos = Math.floor(Math.random() * (HEIGHT - SPRITEDIMENSION + 1)); //a random number within the screen (compensating for sprite size)
        this.enemyXVelocity = currentSpeed;
        this.isAlive = true;
    }

    //draw an enemy sprite with new position
    update() {
        this.enemyXPos -= currentSpeed; //move enemy to the left
        //canvas.fillStyle = "#ff0000";
        //canvas.fillRect(this.enemyXPos, this.enemyYPos, SPRITEDIMENSION, SPRITEDIMENSION);
        canvas.drawImage(rockImage, this.enemyXPos, this.enemyYPos);



        /*** hit detection ***/
        if (this.enemyYPos + SPRITEDIMENSION >= yPos && this.enemyYPos <= yPos + SPRITEDIMENSION && this.enemyXPos <= xPos + SPRITEDIMENSION && this.enemyXPos + SPRITEDIMENSION >= xPos) {
            isDead = true;
            this.enemyXVelocity = 0;
            this.isAlive = false;
        }

        if (this.enemyXPos + SPRITEDIMENSION < 0) //if enemy has gone left off the screen
        {
            this.isAlive = false;//removes from array, stops drawing
        }
    }
}

class pickUp {
    puXPos;
    puYPos;
    puXVelocity;
    isPickedUp;

    constructor() {
        this.puXPos = WIDTH;
        this.puYPos = Math.floor(Math.random() * (HEIGHT - SPRITEDIMENSION + 1)); //a random number within the screen (compensating for sprite size)
        this.puXVelocity = currentSpeed;
        this.isAlive = true;
    }

    //draw an enemy sprite with new position
    update() {
        this.puXPos -= currentSpeed; //move enemy to the left
        //canvas.fillStyle = "#d4af37";
        //canvas.fillRect(this.puXPos, this.puYPos, SPRITEDIMENSION, SPRITEDIMENSION);
        canvas.drawImage(fishImage, this.puXPos, this.puYPos);


        /*** hit detection ***/
        if (this.puYPos + SPRITEDIMENSION >= yPos && this.puYPos <= yPos + SPRITEDIMENSION && this.puXPos <= xPos + SPRITEDIMENSION && this.puXPos + SPRITEDIMENSION >= xPos) {
            score += 100; //pickup is gotten, add to score
            this.puXVelocity = 0;
            this.isPickedUp = false;
        }

        if (this.enemyXPos + SPRITEDIMENSION < 0) //if pickup has gone left off the screen
        {
            this.isPickedUp = false;//removes from array, stops drawing
        }
    }
}




/**************************** GAME LOGIC ***************************/


var myVar = setInterval(draw, 16.33);//60FPS

var c = document.getElementById("gameCanvas");
var canvas = c.getContext("2d");

var secondsCount = 0;
var frameCount = 1;

var enemySpawnRate = 60, pickUpSpawnRate = 6;

var scoreSpeedCheck = 500; //will increase speed every 500 points

var SPRITEDIMENSION = 40; //size of the sprite - SPRITEDIMENSIONxSPRITEDIMENSION
var WIDTH = 800;
var HEIGHT = 600;
var xPos = SPRITEDIMENSION * 1.4;
var yPos = 300;
var yVelocity = 0; //current moving direction of player (negative is up, positive is down)
var ySpeed = 5; //the speed at which the player moves

var enemies = [];

var pickups = [];

var spawnArray = [60, 45, 30, 20, 10, 5, 2, 1];
var spawnArrayIterator = 0;


//start:
canvas.fillStyle = "#33AFFF";
canvas.fillRect(0, 0, WIDTH, HEIGHT);
canvas.font = "50px VT323";
canvas.shadowOffsetX = 2;
canvas.shadowOffsetY = 2;
canvas.shadowBlur = 4;
canvas.shadowColor = "rgba(0,0,0,1)";
var titleYPos = 150;
var hoverAngle = 0;




//draw:
function draw() {


    /********************************************************GAME BEING PLAYED**********************************************/
    //draw background
    canvas.fillStyle = "#33AFFF";
    canvas.fillRect(0, 0, WIDTH, HEIGHT);//draw background

    /*STARTUP SCREEN*/
    if (isStarted == false)//of on startup screen
    {
        canvas.fillStyle = "white";
        canvas.shadowColor = "rgba(0,0,0,1)";
        canvas.font = "80px VT323";
        if(hoverAngle > 100000) {//preventing hoverangle from going too high
            hoverAngle = 0;
        }
        hoverAngle += 5;//hover speed
        titleYPos += Math.cos(hoverAngle * (Math.PI / 180)) * 0.3; //returns between -1 and 1 * 0.25. Makes titleYPos hover up and down
        canvas.fillText("BOAT GAME", 250, titleYPos);
        canvas.font = "30px VT323";

        canvas.fillText("Use the arrow keys to dodge the rocks", 180, 275);
        canvas.fillStyle = "yellow";
        canvas.fillText("Get 5000 points to win 5000 free meals at the restaurant!", 70, 325);
        canvas.fillStyle = "white";
        canvas.fillText("Press SPACE to start", 280, 450);
        canvas.font = "50px VT323";

        canvas.shadowColor = "rgba(0,0,0,1)";
    }


    /*GAME RUNNING*/
    if (isStarted == true) { //if the game is currently running (past startup screen)
        //draw player
        canvas.drawImage(boatImage, xPos, yPos);

        /* Player bounding */
        if (xPos > WIDTH) {
            xPos = -SPRITEDIMENSION;
        }
        if (yPos < 0) {
            yPos = 0;
        }
        if (yPos > HEIGHT - SPRITEDIMENSION) {
            yPos = HEIGHT - SPRITEDIMENSION;
        }

        //move player up or down
        yPos += yVelocity;


        /**enemy drawing**/
        //if (isDead == false) {
        for (var i = 0; i <= enemies.length; i++) {
            try //stopping TypeErr from being thrown
            {
                if (enemies[i].isAlive == false) {
                    enemies.splice(i, 1); //remove element from array after it dies
                }
                enemies[i].update();
            }
            catch (err) { }
            finally { }
        }

        /* Pickup Drawing */

        for (var i = 0; i <= pickups.length; i++) {
            try //stopping TypeErr from being thrown
            {
                if (pickups[i].isPickedUp == false) {
                    pickups.splice(i, 1); //remove element from array after it dies
                }
                pickups[i].update();
            }
            catch (err) { }
            finally { }
        }


        /**frame counting**/
        frameCount++;

        if (frameCount % 5 == 0)//add to score every 5 frames
        {
            score++;
        }

        if (frameCount % spawnArray[spawnArrayIterator] == 0) {
            enemies.push(new Enemy());
            if (secondsCount % 4 == 0) { //spawn two enemies at once every 4 seconds
                enemies.push(new Enemy());
            }
        }
        if (frameCount > 60)//reset frame count after 60 frames
        {
            frameCount = 1;
            secondsCount++;
            if (secondsCount % pickUpSpawnRate == 0) // spawn a pickup every 6 seconds
            {
                pickups.push(new pickUp());
            }
        }
        //animations - cycle every 15 frames
        if(frameCount == 1 || frameCount == 30) {
            boatImage.src = "images/boat2.png";
            rockImage.src = "images/rock2.png";
        }
        else if (frameCount == 15 || frameCount == 45) {
            boatImage.src = "images/boat1.png";
            rockImage.src = "images/rock1.png";
        }

        /**score drawing**/

        canvas.fillStyle = "white";
        canvas.shadowColor = "rgba(0,0,0,1)";
        canvas.font = "50px VT323";
        canvas.fillText("SCORE " + padZero(score), 500, 55);

        canvas.shadowColor = "rgba(0,0,0,0)";//removing dropshadow from other elements

        /**increasing speed when points reach threshold**/
        if (score > scoreSpeedCheck) {
            console.log("Speed Up!");
            scoreSpeedCheck += 500;//set the score check to its next iteration
            currentSpeed++;
            if (spawnArrayIterator != spawnArray.length - 1) {
                spawnArrayIterator++;
            }
            console.log("Spawn rate: " + spawnArray[spawnArrayIterator]);
            if (pickUpSpawnRate != 1) {
                pickUpSpawnRate--;
            }
        }
        //}//end of if isDead=false check
    }
    if (isDead == true) { //after crashing
        canvas.fillStyle = "white";
        canvas.shadowColor = "rgba(0,0,0,1)";
        canvas.fillText("You crashed!", 280, 300);
        clearInterval(myVar);
        //call delayed function that prints 'press SPACE to retry'
        setTimeout(function () {
            canvas.font = "30px VT323";
            canvas.fillText("Press SPACE to retry", 280, 340);
        }, 1000);
        //canvas.shadowColor = "rgba(0,0,0,0)";//removing dropshadow from other elements   
    }
}






/***************FUNCTIONS****************/

function startMove(e) {
    //start movement on key down
    if (isStarted == true && isDead == false) {
        if (e.keyCode == 38 && yPos - ySpeed > 0) //up arrow
        {
            yVelocity = -ySpeed;
        }
        if (e.keyCode == 40 && yPos + ySpeed < HEIGHT) //down arrow
        {
            yVelocity = ySpeed;
        }
    }
    if (isDead == true && isStarted == true && e.keyCode == 32) //space key
    {
        reset();
    }
    if (isStarted == false && e.keyCode == 32) //space key
    {
        isStarted = true;
    }
}
function endMove(e) {
    //end movement on key up
    if (isStarted == true && isDead == false) {
        if (e.keyCode == 38) //up arrow
        {
            yVelocity = 0;
        }
        if (e.keyCode == 40) //down arrow
        {
            yVelocity = 0;
        }
    }
}

function padZero(sc)//padding score to so that it will have enough leading zeroes to be 7 figures
{
    var zeroHolder = "";
    if (sc.toString().length < 7) {
        for (var i = 1; i <= 7 - sc.toString().length; i++) {
            zeroHolder += "0";
        }
    }
    //console.log(zeroHolder + sc);
    return zeroHolder + sc;
}
function reset() {//if prompted to retry, reset all starting variables to their original values - NOTE: create fixed starting variables
    isDead = false;
    enemies = [];
    pickups = [];
    score = 0;
    canvas.font = "50px VT323";
    currentSpeed = STARTING_SPEED;
    secondsCount = 0;
    frameCount = 1;
    enemySpawnRate = 60, pickUpSpawnRate = 6;
    scoreSpeedCheck = 500
    yPos = 300;
    yVelocity = 0; //current moving direction of player (negative is up, positive is down)
    ySpeed = 5; //the speed at which the player moves
    spawnArrayIterator = 0;

    myVar = setInterval(draw, 16.33);//restart the draw interval
}
