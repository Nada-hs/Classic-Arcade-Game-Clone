
let level = 1;// levels of the game
let live = 3; // lives of the plyer


// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x=x;
    this.y=y;
    this.sprite = 'images/enemy-bug.png';
    this.loc1 = x;
    this.loc2 = y;
};


Enemy.prototype.update = function(dt) {
// game level the speed will increase as the level increases
     if( level === 1){
        for(var i=0; i<allEnemies.length; i++){
            allEnemies[i].speed=150;
        }
    }
    if( level === 2 ){
        for(var j=0; j<allEnemies.length; j++){
            allEnemies[j].speed=250;
        }
    }
    if( level === 3 ){
        for(var k=0; k<allEnemies.length; k++){
            allEnemies[k].speed=400;
        }
    }
      if( level === 4 ){
        for(var l=0; l<allEnemies.length; l++){
            allEnemies[l].speed=550;
        }
    }

       this.x = this.x+(this.speed*dt);//  ensure the game runs at the same speed for all computers.


  
      //reset enemy's position
      if( this.x >= 500 ){
        this.reset();
    }

    //every time collision with the enemies happened
    if( player.x > this.x -50 && player.x <this.x + 50 ){
        if( player.y >= this.y -50 && player.y <=  this.y+50 ){
           live--;
            player.x = 200;
            player.y = 400;
            if (live === 0) { // if collision happened plyer loose live
            showloseBox(); 
             livel =1 
             live = 3;
             // window.location.reload();
            }

        }
        document.getElementById("live").innerHTML= live;

    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.reset = function() {
    this.x = this.loc1;
    this.y = this.loc2;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player(x,y){
this.x=x;
this.y=y;
this.sprite = 'images/char-horn-girl.png';

Player.prototype.update=function(dt) {
     if( this.y < -15 ){
        this.reset(); 
        level++;      
        if(level > 4){          
          showEndBox(); 
            
        }
        document.getElementById("level").innerHTML= level;
    }
} 
Player.prototype.render=function()
{ 
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}

Player.prototype.handleInput=function move(key)
{
switch (key) {
     case 'right':
      if(this.x < 400) {
        this.x = this.x + 50;
      }
    break;
    case 'left':
      if(this.x > 0) {
        this.x = this.x - 50;
      }
    break;
   
    case 'up':
        if(this.y > -85) {
      this.y = this.y - 80;
        }
    break;
    case 'down':
      if(this.y < 373.5) {
        this.y = this.y + 80;
      }
    break;
  }
}

}

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;
};


 
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies =[ new Enemy(-160,50),new Enemy(-790,140),new Enemy(-520,50),new Enemy(-970,230),new Enemy(-280,230), new Enemy(-500,230), new Enemy(-200,140)];
// Place the player object in a variable called player
let player = new Player(200,400);

// Loose window
function showloseBox(){
  document.getElementById("pop-upl").style.display='block';
  let dialog = document.querySelector('#pop-upl');
  }
  // Win window
function showEndBox(){
document.getElementById("pop-up").style.display='block';
let dialog = document.querySelector('#pop-up');
}

//Toggle Info btn
function myFunction() {
  var window = document.getElementById("myDIV");
  if (window.style.display === "none") {
    window.style.display = "block";
  } else {
    window.style.display = "none";
  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
// This input for phons plyers 
function moveleft() {
    player.handleInput('left')

  }
document.querySelector(".btn-left").addEventListener("click", moveleft);

function moveright() {
    player.handleInput('right')

  }
document.querySelector(".btn-right").addEventListener("click", moveright);

function moveup() {
    player.handleInput('up')

  }
document.querySelector(".btn-up").addEventListener("click", moveup);

function movedown() {
    player.handleInput('down')

  }
document.querySelector(".btn-down").addEventListener("click", movedown);


