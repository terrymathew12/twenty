alert(`Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer.

You will draw numbers from 1 to 10, the computer will stop at 16.

Pay attention to the screen to see what your total is, and if you need another number, press 'y'`);



alert("Now... It is computer's turn.");

var play = 0;

var round = 1;

var userwins = 0;
var computerwins = 0;

do {
  var computernum = 0;
  var usernum = 0;
  
  do {
    var number = Math.floor(Math.random() * 10) + 1;
    computernum = Math.floor(computernum + number);
    alert(`The new number is ${number}
  
The computer total is ${computernum}`);
  } while (computernum < 16);
  
  if (computernum < 21) {
    alert(`The computer has finished and his final number was ${computernum}. Now it's your turn to draw.`);
    var number = Math.floor(Math.random() * 10) + 1;
    usernum = Math.floor(usernum + number);
    alert(`Your new number is ${number}`);

    var userrequest = confirm("Draw another number?");

  do {
    if (usernum < 21) {
      do {
        var number = Math.floor(Math.random() * 10) + 1;
        usernum = Math.floor(usernum + number);
        alert(`You rolled a ${number} 
Your new total is ${usernum}`);
      

        if (usernum < 21) {
          userrequest = confirm("Draw another number?");
        } else if (usernum > 20) {
          break;
        }
    } while (userrequest == true)
      
      if (usernum > 20) {
        alert("Oops, you went over 20. The round is forfeit. Computer Wins!")
        computerwins++
        break;
      }
      
      alert(`Your final number was ${usernum}`);

      if (usernum == computernum) {
        alert(`Both you and the computer both ended with ${usernum}. Its a tie!`)
      } else if (usernum > computernum) {
        alert(`You got ${usernum} and Matt got ${computernum}. Congratulations, You Win!`)
        userwins++
      } else if (computernum > usernum) {
        alert(`You got ${usernum} and Matt got ${computernum}. Computer Wins!`)
        computerwins++
      } 
    
    } else if (usernum > 20) {
      alert("Oops, you went over 20. The round is forfeit. Computer Wins!")
      computerwins++
    }
      
  } while (play == 0)
    
  } else if (computernum > 20) {
    alert("Oops, Computer went over 20. The round is forfeit. You Win!")
    userwins++
    } 
  
  var playagain = confirm("Would you like to play again?");
    if (playagain == false) {
      break;
    } else if (playagain == true) {
      round++
      alert(`Round ${round}!`);
    }

} while (play == 0);
alert(`Thank you for playing, you played ${round} rounds and your final score was: 
        Computer: ${computerwins}
        You: ${userwins}`);




