let win = 0;
    let lose = 0;
    let tie = 0;
    const gameScore = document.querySelector('.game-score');

    function resetGame() {
      win = 0;
      lose = 0;
      tie = 0;
      gameScore.innerHTML = `Win: ${win} Lose: ${lose} Tie: ${tie}`;
    }
    
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';
      const gameText = document.querySelector('.game-text');
      const gameResult = document.querySelector('.game-result');
      const gameScore = document.querySelector('.game-score');
      
      if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'Tie';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='rock.png'> <img width= 125px class='game-move'  src='rock.png'> Computer picked";
          tie += 1;
        } else if (computerMove === 'Paper') {
          result = 'Lose';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='rock.png'> <img width= 125px class='game-move'  src='paper.png'> Computer picked";
          lose += 1;
        } else {
          result = 'Win';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='rock.png'> <img width= 125px class='game-move'  src='scissors.png'> Computer picked";
          win +=1;
        }
        gameResult.innerHTML = `It's a ${result}`;
        gameScore.innerHTML = `Win: ${win} Lose: ${lose} Tie: ${tie}`;
      }

      if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'Win';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='paper.png'> <img width= 125px class='game-move'  src='rock.png'> Computer picked";
          win +=1;
        } else if (computerMove === 'Paper') {
          result = 'Tie';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='paper.png'> <img width= 125px class='game-move'  src='paper.png'> Computer picked";
          tie += 1;
        } else {
          result = 'Lose';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='paper.png'> <img width= 125px class='game-move'  src='scissors.png'> Computer picked";
          lose += 1;
        }
        gameResult.innerHTML = `It's a ${result}`;
        gameScore.innerHTML = `Win: ${win} Lose: ${lose} Tie: ${tie}`;
      }

      if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
          result = 'Lose';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='scissors.png'> <img width= 125px class='game-move'  src='rock.png'> Computer picked";
          lose += 1;
        } else if (computerMove === 'Paper') {
          result = 'Win';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='scissors.png'> <img width= 125px class='game-move'  src='paper.png'> Computer picked";
          win +=1;
        } else {
          result = 'Tie';
          gameText.innerHTML = "You picked <img width= 125px class='game-move' src='scissors.png'> <img width= 125px class='game-move'  src='scissors.png'> Computer picked";
          tie += 1;
        }
        gameResult.innerHTML = `It's a ${result}`;
        gameScore.innerHTML = `Win: ${win} Lose: ${lose} Tie: ${tie}`;
      }
    }

    function pickComputerMove() {
      const randomNumber = Math.random()
      if (randomNumber > 0 && randomNumber <= 1/3) {
        computerMove = 'Rock';
      } else if (randomNumber > 1/3 && randomNumber <=2/3) {
        computerMove = 'Paper';
      } else {
        computerMove = 'Scissors';
      }
      return computerMove;
    }