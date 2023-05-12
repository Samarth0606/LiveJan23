

// method - 3
axios.get('https://inshorts.deta.dev/news?category=sports')
    .then(function(resp){
        console.log(resp.data);
    })
    .catch(function(err){
        console.log(err);
    })












