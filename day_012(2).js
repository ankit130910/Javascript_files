// document.getElementById("btn1").addEventListener('click',display1);

// function display1(){
//     alert("Welcome to Cybrom !!!");
// }


document.getElementById("btn2").addEventListener('click',calc);

function calc(){
    let a = parseInt(document.getElementById('n1').value);
    let b = parseInt(document.getElementById('n2').value);

    let ans = document.getElementById('ans').innerHTML = a+b;
}