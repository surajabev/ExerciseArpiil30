

var message="3.14 it's a great number but 42 it's the answer to life.";
var pi=parseFloat(message.substring(0,4));
console.log(pi);
var answerToLife=parseInt(message.substring(29,31));
console.log(answerToLife);
var result=pi+answerToLife;
console.log(result);
console.log(`"pi=" ${pi} ,"answerToLife" ${answerToLife}`);
console.log(`${result} is result of adding ${pi} and ${answerToLife}`);
console.log(result.toString());
