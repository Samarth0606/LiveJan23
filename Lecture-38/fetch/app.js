

//method-2
// using fetch for calling an api

fetch('https://inshorts.deta.dev/news?category=science')
    .then(function(response){
        // console.log(response);
        return response.json(); //.json() also returns a promise
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })


    












