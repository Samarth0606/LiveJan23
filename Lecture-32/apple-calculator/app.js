


let buttons = document.querySelectorAll('button');

let input = document.querySelector('input');


for(let button of buttons){
    button.addEventListener('click' , function(event){
        let btnText = event.target.innerText;
        if(btnText === 'C'){
            input.value = '';
        }
        else if( btnText === '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value = 'gaddari korbe' //invalid
            }
        }
        else{
            input.value += btnText;
        }

    })
}









