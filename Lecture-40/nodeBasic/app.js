
let PI = 3.145;
let magicNum = 68;

console.log('live classes ka bhaukaal');


function sqr(num){
    return num*num;
}

let obj = {
    first:'samarth',
    last: 'vohra',
    age: 27,
    getNaam : function(){
        console.log(this.first + ' ' + this.last);
    }
}


console.log(PI);
console.log(magicNum);
console.log(sqr(6));
console.log(obj.getNaam());























