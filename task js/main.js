//question 1
function neg_pos(){
let input=prompt("Enter a number:");
if (input<0){
    console.log("Negative");
    }
    else{
        console.log("Positive");
    }
}
//question 2
function writeNumber(){
    let num =4;
    switch (num){
        case 1 :
            console.log("One");
            break;
        case 2 :
            console.log("Two");
            break;
        case 3 :
            console.log("Three");
            break;
        case 4 :
            console.log("Four");
            break;
        case 5 :
            console.log("Five");
            break;
        default:
            console.log("more than five");
    } 
}
//question 3
function sumOdd(){
let numbers = [11, 17, 13, 12, 5];
let sum =0;
for (let num of numbers){
    if (numbers%2 !== 0){
        sum +=num;
    }
} 
console.log("Sum of all odd values: " + sum);
}

//qurstion 4
function leapYear(){
    let year=prompt("Enter a year :");
    if (leapYear%400==0 && leapYear%4==0){
        console.log("it is leapyear.");
    }
    else {
        console.log("it is leapyear.");
    }
}

//question 5
function checkAge(){
    let birthYear=prompt("Enter your birth year:");
    let age=2025-birthYear;
    if (age<=18 ){
        console.log("less than 18");
    }
    else{
        console.log("above than 18");
    }
}

//question 6
let grade=88;
if (grade<25){
    console.log("F");
}
else if(grade>=25 && grade<45){
    console.log("E");
}
else if(grade>=45 && grade<50){
    console.log("D");
}
else if(grade>=50 && grade<60){
    console.log("C");
}
else if(grade>=60 && grade<=80){
    console.log("D");
}
else{
    console.log("A");
}

 //question 7
function monthofyear(){
    let month=5;
    switch (month){
        case 1 :
            console.log("January");
            break;
        case 2 :
            console.log("February");
            break;
        case 3 :
            console.log("March");
            break;
        case 4 :
            console.log("April");
            break;
        case 5 :
            console.log("May");
            break;
        case 6 :
            console.log("June");
            break;
        case 7 :
            console.log("July");
            break;
        case 8 :
            console.log("August");
            break;
        case 9 :
            console.log("September");
            break;
        case 10 :
            console.log("October");
            break;
        case 11 :
            console.log("November");
            break;
        case 12 :
            console.log("December");
            break;
        default:
            console.log("more than five");
    } 
}
//question 8
function even_odd(){
    let number=prompt("Enter a number:");
    if(number%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}