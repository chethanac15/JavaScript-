prompt ("What is your name ?");
var name = prompt("What is your name");
var firstChar = name.slice(0,1);
var upperCasefirstChar = firstChar.toUpperCase();
var restname = name.slice(1,name.length);
var capitals = upperCasefirstChar + restname;
alert("Hi" + " " + capitals);
