
var userAndPassword='pepito2017,12345';

var subStr=userAndPassword.substring(0,10);
console.log(subStr);
var password=userAndPassword.substring(11,16);
console.log(password);

var result=`The user  ${subStr} has ${password} as password`;
