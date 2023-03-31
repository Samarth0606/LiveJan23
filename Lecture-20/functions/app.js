
// function defination
function sum(){
    let num1 = 10;
    let num2 = 30;
    console.log(num1 + num2);
}

// function calling
// sum();
// console.log(sum());

// sum();
// sum();
// sum();


// parameterised functions
function triple(num3){ //parameter
    let num1 = 10;
    let num2 = 20;
    console.log(num1 + num2 + num3);
}

// triple(100); //arguments
// triple(60); //arguments
// triple(900); //arguments
// triple(45); //arguments


// returing something from a function
function sum2(){
    let num1 = 10;
    let num2 = 20;
    return (num1 + num2);

}

// console.log(sum2());


// multiple paramters
function sam(num1 , num2){
    return num1 + num2
}

// console.log(sam(30,40));


// NAN
function sam(num1 , num2){
    return num1 + num2
}

// console.log(sam(30));



// nothing returned and less arguments
function sam1(num1 , num2){
    console.log(num1);  //30
    console.log(num2);  //undefined
}

// console.log(sam1(30)); //kuch nhi return horha //undefined



// default parameterised functions
function sam2(num1 , num2 = 40){ // default parameter
    console.log(num1);  
    console.log(num2);  
}

// sam2(20);
// sam2(20,50); 



// default parameterised functions
function sam2(num1 = 40 , num2){ // default parameter
    console.log(num1);  //20
    console.log(num2);  //undefined
}

// sam2(20);
// sam2(20,50);












