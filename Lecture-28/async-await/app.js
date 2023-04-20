
// function some(){

// }
// console.log(some());
//return undefined


// ----------

// let p1 = new function(){

// }
// console.log(p1);
//return an empty object

// ------------


async function some(){
    await new Promise( (resolve , reject)=>{
        setTimeout( ()=>{
            console.log('3 second hogye');
            resolve();
        } , 3000)
    } )

    await new Promise( (resolve , reject)=>{
        setTimeout( ()=>{
            console.log('2s hogye');
            resolve()
        } , 2000 )

    } )
    console.log('dono kaam hogye')

}

some();












