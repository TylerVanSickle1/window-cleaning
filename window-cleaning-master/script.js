let button1 = document.getElementById('packageButton1');
let x1 = document.getElementById('closeButton1');
let button2 = $('#packageButton2');
let x2 = document.getElementById('closeButton2');
let button3 = $('#packageButton3');
let x3 = document.getElementById('closeButton3');
let button4 = $('#packageButton4');
let x4 = document.getElementById('closeButton4');

button1.addEventListener('click', function(){
    $('#popup1').toggleClass('popup1none');
});

x1.addEventListener('click', function(){
    $('#popup1').toggleClass('popup1none');
});

button2.on('click', function() {
    $('#popup2').toggleClass('popup2none');
});

x2.addEventListener('click', function(){
    $('#popup2').toggleClass('popup2none');
});

button3.on('click', function() {
    $('#popup3').toggleClass('popup3none');
});

x3.addEventListener('click', function(){
    $('#popup3').toggleClass('popup3none');
});

button4.on('click', function() {
    $('#popup4').toggleClass('popup4none');
});

x4.addEventListener('click', function(){
    $('#popup4').toggleClass('popup4none');
});