'use strict';
// eslint-disable-next-line no-unused-vars
let score=0;
let club=prompt('Do you think I am a Real Madrid fan ?');
club=club.toLowerCase();
if(club==='yes' || club ==='y'){
  // console.log('yes you are right!!');
  score++;
  alert('yes you are right!!');
}else if(club==='no' || club ==='n'){
  // console.log('no , I am actully a madridista');
  alert('no , I am actully a madridista');
}else{
  // console.log('please only choose (yer or no)');
  alert('please only choose (yer or no) ');
}
let movie=prompt('Do you think I like action movies ?');
movie=movie.toLowerCase();
if(movie==='yes' || movie ==='y'){
  // console.log(''no, guess again'');
  alert('wrong, guess again');
}else if(movie==='no' || movie ==='n'){
  // console.log('right , I am actully love comedy movies');
  score++;
  alert('right , I am actully love comedy movies');
}else{
  // console.log('please only choose (yer or no)');
  alert('please only choose (yer or no) ');
}
let prog=prompt('Do you think I love programming ?');
prog=prog.toLowerCase();
if(prog==='yes' || prog ==='y'){
  // console.log('yes you are right!!');
  score++;
  alert('yes you are right!!');
}else if(prog==='no' || prog ==='n'){
  // console.log('really ,you are wrong  !!!');
  alert('really ,you are wrong !!!');
}else{
  // console.log('please only choose (yer or no)');
  alert('please only choose (yer or no) ');
}
let food=prompt('Do you think I hate maqluba ?');
food=food.toLowerCase();
if(food==='yes' || food ==='y'){
  // console.log('wrong, who can hate it');
  alert('wrong, who can hate it');
}else if(food==='no' || food ==='n'){
  // console.log('yes you are right!!');
  score++;
  alert('yes you are right!!');
}else{
  // console.log('please only choose (yer or no)');
  alert('please only choose (yer or no) ');
}
let vgames=prompt('Do you think I like video games ?');
vgames=vgames.toLowerCase();
if(vgames==='yes' || vgames ==='y'){
  //console.log('yes you are right!!');
  score++;
  alert('yes you are right!!');
}else if(vgames==='no' || vgames ==='n'){
  //console.log('wrong choice');
  alert('wrong choice');
}else{
  //console.log('please only choose (yer or no)');
  alert('please only choose (yer or no) ');
}
let userName=prompt('what is your name ?');
document.write('<p>Welcome to my site '+ userName+'</p>');
document.write('<p>I want to thank you for your support  '+ userName+' by visiting my site</p>');


for(let i=0;i<=4;i++){
  if(i===4){
    alert('You have used all your attempts the right answer is 7');
    break;
  }
  let favNumber=prompt('can you guess my Lucky number ?');
  favNumber=parseInt(favNumber);
  if(favNumber===7){
    alert('you are right my Lucky number is 7' );
    score++;
    break;
  }else if(favNumber<7){
    alert('too low');
  }else if(favNumber>7){
    alert('too high');
  }else{
    alert('please write a number');
  }
}


let Players=['marcelo','lukaku','ramos','modric'];
for(let i=0;i<=6;i++){
  if(i===6){
    alert('my favorite football players are '+Players[0]+' '+Players[1]+' '+Players[2]+' '+Players[3]);
    break;
  }
  let favPlayers=prompt('can you guess one of my favorite football players ?');
  favPlayers=favPlayers.toLowerCase();
  if(favPlayers===Players[0] || favPlayers===Players[1] || favPlayers===Players[2] || favPlayers===Players[3]){
    score++;
    alert('yes, '+favPlayers+' is one of my favorite football players');
    break;
  }else {
    alert('try again');
  }
}
alert('your score is '+score+' out of 7');

// try1
// for(let i=0;i<=6;i++){
//   let favPlayers=prompt('can you guess one of my favorite football players ?');
//   favPlayers=favPlayers.toLowerCase();
//   if(i===6){
//       alert('my favorite football players are'+Players[0]+' '+Players[1]+' '+Players[2]);
//       break;
//     }
//   }
//   if(favPlayers==Players[0] || favPlayers==Players[1] || favPlayers==Players[2] || favPlayers==Players[3] ){
//     alert('yes, '+favPlayers+' is one of my favorite football players');
//   } else{
//     alert('please try again');
//   }
// }


