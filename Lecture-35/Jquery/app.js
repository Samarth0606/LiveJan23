

// selecting elements

// tag
// console.log($('h1')) ;

// class
// console.log($('.sam'));

// id
// console.log($('#sam'));



// manipulate elements
// css adding

// single css property--
// $('h1').css('color' , 'red');
// $('h1').css('background-color' , 'green');

// multiple  css  properties--
// $('h1').css({
//     color: 'red' ,
//     backgroundColor : 'plum'
// })



// access text -----
// console.log($('p').text()); //text method -- innerHTML
// console.log($('p').text('senorita')); //text method -- textContent
// console.log($('p').text('<em> senorita </em>')); //text method -- textContent

// console.log($('p').html()); //text method -- innerHTML
// console.log($('p').html('<em> senorita </em>')); //text method -- innerHTML


// manipulating attributes-----

// console.log($('a').text()) ;
// console.log($('a').attr('href')) ; //getter
// console.log($('a').attr('href' , 'http://bing.com')) ; //setter


// selecting particular elements out of all---
// $('h1:nth-of-type(4)').css('border' , '2px solid plum');
// $('h1:first()').css('border' , '2px solid plum'); //right
// $('h1:last()').css('border' , '2px solid plum'); //right
// $('h1:firstChild()').css('border' , '2px solid plum');//wrong
// $('h1:lastChild()').css('border' , '2px solid plum'); //wrong


// $('h1:last()').css('border' , '2px solid plum');
// $('h1').last().css('border' , '20px solid plum'); //alternative way

// $('h1:first()').css('border' , '2px solid plum');
// $('h1').first().css('border' , '20px solid plum'); //alternative way



// getting value of inputs -----

// $('input').val()
// console.log($('input').val());


// manipulating class attribute ----
// $('h1').first().addClass('first'); //single class

//addClass(0)
// $('h1').first().addClass('first second sam');

// removeClass()
// $('h1').first().removeClass('second'); //single
// $('h1').first().removeClass('second sam'); //multiple


// toggleClass()
// $('h1').first().toggleClass('second'); //single
// $('h1').first().toggleClass('second sam'); //multiple

// hasClass()
// $('h1').first().hasClass('sam'); //single



// events ----
// click---
// $('button').click(function(){
//     console.log("master ji pitaji ki patloon 1 bilaand choti krdo")
// })

// new concept and important //'this'
// 'this' is NOT SAME as that of your js // 'this' alag hai
//event.target == this (same kaam krega almost)
// 'this' points to the element over which the event is being triggered
// make sure never use arrow function it doesnot work here

// $('li').click(function(){
//     $(this).css('color', 'crimson');
// })


// input---

// $('input').keyup(function(){
//     console.log($(this).val());
// })


// addEventListener --> 'on'

// $('button').on('click' , function(){
//     console.log("master ji pitaji ki patloon 1 bilaand choti krdo")
// })

// $('input').keypress(function(e){
//     // console.log($(this).val());
//     if(e.which == 13){
//         console.log($(this).val());
//     }
// })


// effects ----

// $('#fadeout').click(function(){
//     $('#container').fadeOut();
// })

// $('#fadein').click(function(){
//     $('#container').fadeIn();
// })

// $('#fadetogle').click(function(){
//     $('#container').fadeToggle();
// })









