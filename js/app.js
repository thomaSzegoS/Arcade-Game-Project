// Enemy Constructor
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y =y ;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};


// Enemy's update() method
// Updates en enemy's position on canvas
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;

    // Check if enemy is out of canvas and reset his position
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 400);
    }

// Check for collisions
if (player.x < this.x + 60 &&
    player.x + 37 > this.x &&
    player.y < this.y + 25 &&
    30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
};


// Enemy's render() method.
// Draw the enemy on the screen.
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Player Constructor
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-horn-girl.png';
};


// Player's update() method
// Update player's position on canvas
Player.prototype.update = function() {
    if (this.y > 380) {
      this.y = 380;
    }

    if (this.x > 400) {
      this.x = 400;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    // Check if player reached the top of canvas
    if (this.y < 0) {
      this.x = 200;
      this.y = 380;
    }
};


// Player's render() method.
// Draw the enemy on the screen.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Player's handleInput() method.
// Handle key press inputs
Player.prototype.handleInput = function(keyCode) {
    switch (keyCode) {
      case 'left':
          this.x -= this.speed + 50;
          break;
      case 'up':
          this.y -= this.speed + 30;
          break;
      case 'right':
          this.x += this.speed + 50;
          break;
      case 'down':
          this.y += this.speed + 30;
          break;
    }
};


// Instantiate objects.
var allEnemies = [];
var enemyPosition = [60, 142, 225];
var player = new Player(200, 380, 50);
var enemy;

enemyPosition.forEach(function(y) {
  enemy = new Enemy(0, y, 100 + Math.floor(Math.random() * 500));
  allEnemies.push(enemy);
});



// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
