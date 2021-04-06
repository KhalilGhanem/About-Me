'use strict';
// eslint-disable-next-line no-unused-vars
let club=prompt('Do you think I am a Real Madrid fan ?');
club=club.toLowerCase();
if(club==='yes' || club ==='y'){
  // console.log('yes you are right!!');
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
  alert('no, guess again');
}else if(movie==='no' || movie ==='n'){
  // console.log('right , I am actully love comedy movies');
  alert('right , I am actully love comedy movies');
}else{
  // console.log('please only choose (yer or no)');
  alert('please only choose (yer or no) ');
}
let prog=prompt('Do you think I love programming ?');
prog=prog.toLowerCase();
if(prog==='yes' || prog ==='y'){
  // console.log('yes you are right!!');
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
  alert('yes you are right!!');
}else{
  // console.log('please only choose (yer or no)');
  alert('please only choose (yer or no) ');
}
let vgames=prompt('Do you think I like video games ?');
vgames=vgames.toLowerCase();
if(vgames==='yes' || vgames ==='y'){
  //console.log('yes you are right!!');
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

