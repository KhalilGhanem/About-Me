
let playerName='';
let Players=['marcelo','lukaku','ramos','modric'];
for(let i=0;i<=6;i++){
  if(i===6){
    for(let x=0;x,x<Players.length;x++){
      playerName=playerName+' '+Players[x];
    }
    alert(playerName);
    break;
  }
  let favPlayers=prompt('can you guess one of my favorite football players ?');
  favPlayers=favPlayers.toLowerCase();
  if(favPlayers===Players[0] || favPlayers===Players[1] || favPlayers===Players[2] || favPlayers===Players[3]){

    alert('yes, '+favPlayers+' is one of my favorite football players');
    break;
  }else {
    alert('try again');
  }
}
