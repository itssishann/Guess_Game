const userIn= parseInt(prompt("Enter an Number ->"))
const Random = Math.floor(Math.random()*userIn)+1; // +1 because it genrate from 0 to 0.99
// let inputUser = parseInt(prompt(`Enter An Number Between 1 to ${userIn}->`));
let inputUser;
while(true){
  inputUser=prompt(`Enter Number Between 1 to ${userIn} or "quit" to exit game.`)
  if (inputUser=="quit") {
    alert("Game Quit!");
    break;
  }
  else{
    inputUser=parseInt(inputUser);
    if(inputUser === Random){
        alert(`You Won ${inputUser} = ${Random}`);
        break;
    }
  }

}