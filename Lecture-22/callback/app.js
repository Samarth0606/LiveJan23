


function getBoolean(item){
    return typeof item === 'boolean'
}
function getString(item){
    return typeof item === 'string'
}
function getNumber(item){
    return typeof item === 'number'
}

function check(item , fn ){
    return fn(item) //calling here

}

console.log(check(true , getBoolean)) ;
console.log(check(19 , getString)) ;
console.log(check(19 , getNumber)) ;