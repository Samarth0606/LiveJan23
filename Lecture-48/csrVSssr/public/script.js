// console.log("welcome to script.js")

function refreshlist(){
    $('#list').empty(); //remove previous data
    $.get('/todos' , function(data){ //array available here
        for(let item of data){
            $('#list').append(`<li> ${item} </li>`)
        }
    })

}

$('#btn').on('click' , function(){
    // console.log('btn clicked')
    let todo = $('#inp').val()
    $.post('/todos' , {todo} ,  function(){
        console.log(todo);
        $('#inp').val("");
        refreshlist();
    })
})

refreshlist();









