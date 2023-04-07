


function someFunc(){
    let username = 'einstein';
    function printName(){
        console.log(username)
    }
    return printName;
}
let returnedValue = someFunc();
returnedValue(); // function printName(){
                    // console.log(username)
                // }