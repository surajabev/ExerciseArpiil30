var playerName="Darian15 Durant is lame";
var teams ="BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
var message='Toronto is the best Canadian city, Go riders!!';
// Use the slice method to get the following words or phrases from the previous variables:
// Daran Durant is
// riders
// the best
// , Go
// Use a template variable to create the final result
// Change the first riders character to be Capitalized
// Create all the variables that you might need to accomplish this objective
// The final output must be: DARIAN DURANT is the best Riders player, Go Riders!!


var slice1=((playerName.slice(0,3)));
//console.log(slice1);
var slice2=(playerName.slice(4,6));
//console.log(slice2);
var slice3=playerName.slice(8,18);
//console.log(slice3);
var slice4=slice1+slice2+slice3;
console.log(slice4);
var message=["Toronto" ,"is the best" ,"Canadian city",",Go","riders!!"];
let  slicea=message.slice(4,5);
console.log(slicea);

var sliceb=(message.charAt(38).toUpperCase)+slice(39,43);
console.log(sliceb);

var slice5=message.slice(1,2);
console.log(slice5);
var slice5=message.slice(3,4);
console.log(slice5);
