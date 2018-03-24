var simonSays = {
  green: document.getElementById('green'),
  red: document.getElementById('red'),
  yellow: document.getElementById('yellow'),
  blue: document.getElementById('blue'),
  scoreHTML: document.getElementById('currentScore'),
  score: 0,
  highScore: 0,
  highScoreHTML: document.getElementById('highScore'),
  currentColor: '',
  gameInterval: 3000,
  lightGreen: function() {
    this.clearLights();
    this.green.classList.add('active');
    this.currentColor = 'green'
  },
  lightRed: function() {
    this.clearLights()
    this.red.classList.add('active');
    this.currentColor = 'red';
  },
  lightYellow: function() {
    this.clearLights()
    this.yellow.classList.add('active');
    this.currentColor = 'yellow';
  },
  lightBlue: function() {
    this.clearLights()
    this.blue.classList.add('active');
    this.currentColor = 'blue';
  },
  clearLights: function() {
    this.green.classList.remove('active');
    this.red.classList.remove('active');
    this.yellow.classList.remove('active');
    this.blue.classList.remove('active');
  },
  randomizeColor: function() {
    var randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
      case 0:
        this.lightGreen();
        break;
      case 1:
        this.lightRed();
        break;
      case 2:
        this.lightYellow();
        break;
      case 3:
        this.lightBlue()
        break;
    }
  },
  addScore: function() {
    this.score += 1;
    this.scoreHTML.innerHTML = this.score;
  },

  updateHighScore: function() {
    if (this.score > this.highScore) {
      console.log('execute');
      this.highScore = this.score;
      this.highScoreHTML.innerHTML = this.score;
    }
    this.score = 0;
    this.scoreHTML.innerHTML = this.score;
  }
}

var click = document.getElementsByClassName('corner');
for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', checkScore);
}

for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('mousedown', addPush);
}

for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('mouseup', removePush);
}

function checkScore(event) {
  if (event.target.id == simonSays.currentColor) {
    simonSays.addScore();
    simonSays.randomizeColor();
  } else {
    simonSays.updateHighScore();
    simonSays.clearLights();
    simonSays.currentColor = '';
  }
}

document.getElementById('buttonStartGame').addEventListener('click', function() {
  simonSays.randomizeColor();
});

function addPush(event) {
  event.target.classList.add('push');
}

function removePush(event) {
  event.target.classList.remove('push');
}