

const socket = io();

$('#chat-box').hide();

$('#send-btn').on('click' , ()=>{
    const msgText = $('#inp').val();
    // console.log(msgText);
    if(!msgText){
        return
    }
    else{
        socket.emit('sam-msg' , {
            msg:msgText
        })
    }

    $('#inp').val("")
})


socket.on('received-msg' , (data)=>{
    console.log(data);
    $('#chat').append(`<li class="border mt-2 p-2 rounded-pill"> <span class="fw-bold"> ${data.username} </span> -> ${data.msg} </li>`)
})


$('#login-btn').on('click' , ()=>{
    // console.log('clicked')
    const username = $('#username').val();

    socket.emit('login' , {
        username:username 
    })

    $('#login').hide();
    $('#chat-box').show();

    $('#username').val("")
})












