

weekdayNumber='5';
switch (weekdayNumber){

    case '1':console.log("Its Monday");
    break;



    case '2':console.log("Its Tuesday");
    break;


    case '3':console.log("Its Wednesday");
    break;




    case '4':console.log("Its Thursday");
    break;




    case '5':console.log("Its Friday");
    break;




    case '6':console.log("Its Saturday");
    break;
 
    default:console.log("Please input a number bettwen 1 and 7");
    break;
       
}


//IF/ELSE/IF version:

if (weekdayNumber==1){
    console.log("Its Monday");

}
else
if (weekdayNumber==2){
    console.log("Its Tuesday");

}
else
if (weekdayNumber==3){
    console.log("Its Wednesday");

}
else
if (weekdayNumber==4){
    console.log("Its Thursday");

}
else
if (weekdayNumber==5){
    console.log("Its Friday");

}
else
if (weekdayNumber==6){
    console.log("Its Saturday");

}
else 

{

    console.log("Please input a number bettwen 1 and 7");
}


//Refactor




switch (weekdayNumber){

    case '1':return 'Monday';


    case '2':return 'Tuesday';
    


    case '3':return 'Wednesday';



    case '4':return 'Thursday';


    case '5':return 'Friday';


    case '6':return 'Saturday';

   -
    default:console.log("Please input a number bettwen 1 and 7");
  
       
}