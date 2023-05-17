

//approach 1:  --> rejected

// function fizzbuzz(n){
//     for(let i=1 ; i<=n ; i++){
//         if(i%3 === 0 && i%5 === 0){
//             console.log('FizzBuzz')
//         }
//         else if(i%5 === 0){
//             console.log('Buzz')
//         }
//         else if(i%3 === 0){
//             console.log('Fizz')
//         }
//         else{
//             console.log(i)
//         }
//     }
// }

// fizzbuzz(20);





// approach 2 --> little optimsed --> partially select

// function fizzbuzz2(n){
//     for(let i=1;i<=n;i++){
//         let str = "";
//         if(i%3 === 0){
//             // str = str + 'Fizz'
//             str +='Fizz'
//         }
//         if(i%5 === 0){
//             str+='Buzz'
//         }
//         if(str === ""){
//             str+=i;
//         }
//         console.log(str)
//     }
// }

// fizzbuzz2(20);



//approach 3 --> most optimsed till date --> selection

function fizzbuzz3(n){
    let cnt3 = 1;
    let cnt5 = 1;

    for(let i=1;i<=n;i++){
        let str = "";
        if(cnt3 == 3){
            str +=  'Fizz'
            cnt3 = 0
        }
        if(cnt5 == 5){
            str +=  'Buzz'
            cnt5 = 0
        }
        if(str == ""){
            str += i;
        }
        console.log(str);
        cnt3++;  //0 --> 1
        cnt5++;
    }
}

fizzbuzz3(20)
























