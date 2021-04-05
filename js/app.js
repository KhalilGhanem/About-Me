'use strict';
// eslint-disable-next-line no-unused-vars
let club=prompt('Do you think I am a Real Madrid fan ?');
club=club.toLowerCase();
if(club==='yes' || club ==='y'){
  alert('yes you are right!!');
}else if(club==='no' || club ==='n'){
  alert('no , I am actully a madridista');
}else{
  alert('please only choose (yer or no) ');
}
let movie=prompt('Do you think I like action movies ?');
movie=movie.toLowerCase();
if(movie==='yes' || movie ==='y'){
  alert('no, guess again');
}else if(movie==='no' || movie ==='n'){
  alert('right , I am actully love comedy movies');
}else{
  alert('please only choose (yer or no) ');
}
let prog=prompt('Do you think I love programming ?');
prog=prog.toLowerCase();
if(prog==='yes' || prog ==='y'){
  alert('yes you are right!!');
}else if(prog==='no' || prog ==='n'){
  alert('really !!!');
}else{
  alert('please only choose (yer or no) ');
}
let food=prompt('Do you think I hate maqluba ?');
food=food.toLowerCase();
if(food==='yes' || food ==='y'){
  alert('wrong, who can hate it');
}else if(food==='no' || food ==='n'){
  alert('yes you are right!!');
}else{
  alert('please only choose (yer or no) ');
}
let vgames=prompt('Do you think I like video games ?');
vgames=vgames.toLowerCase();
if(vgames==='yes' || vgames ==='y'){
  alert('yes you are right!!');
}else if(vgames==='no' || vgames ==='n'){
  alert('wrong choice');
}else{
  alert('please only choose (yer or no) ');
}
let userName=prompt('what is your name ?');
document.write('<p>Welcome to my site '+ userName+'</p>');
document.write('<p>I want to thank you for your support  '+ userName+' by visiting my site</p>');

