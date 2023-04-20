



// promise
 
// let promise = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         // let data = 'hi dosto ye promise hai';
//         // resolve(data);//case1
//         // let err = 'opps dikkat aagyi';
//         // reject(err);

//         resolve('hi mai resolve hogya i.e .then()');
//         reject('hi mai lut gya barbaad hogya i.e .catch()');
        
//     } , 3000);
// });

// promise.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })



// let p1 = new Promise( (resolve , reject)=>{
//     console.log("3 second ka wait kro kaam in process...")
//     setTimeout( ()=>{
//         // resolve();
//         reject()
//     } , 3000 )
// } );

// p1.then().catch()
// p1.then( ()=>{
//     console.log("kaam process hogya")
// } ) 
// .catch( ()=>{
//     console.log('error aagayo mori maiyaan')
// } )

// --------------
// .then() chaining  //arise kr rhi hai problem ko

let p1 = new Promise( (resolve , reject)=>{
    console.log("3 second ka wait kro kaam in process...")
    setTimeout( ()=>{
        resolve();
        // reject();
    } , 3000 )
} );


p1.then( ()=>{
        return new Promise( (resolve , reject)=>{
            console.log('promise run krdia hai intezaar kro ab');
            setTimeout( ()=>{
                console.log('2 second lag gye bhaisahab')
                resolve();
            } , 2000 );
        } )
} ) 
.then( ()=>{
        console.log("dono kaam hogye mere");
} )





















