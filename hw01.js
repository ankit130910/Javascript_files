function myfun1(){
    let age = prompt("Enter your age");
    age >= 18 ? alert("Can Vote") : alert("Cannot Vote")
}
// myfun1();

function myfun2(){
    let cmpltd = confirm("Is your course completed ?")
    if(cmpltd){
        let crtfd = confirm("Do yove certificate ?")
        crtfd ? alert("Completed") : alert("Not Completed");
    }else
        alert("Not completed");
}
// myfun2();

function myfun3(){
    let price = Number(prompt("Enter the price of the item"));
    let dis = confirm("Do you have discoount coupun");

    dis ? alert(`Final Price : ${price*0.9}`) : alert(`Final Price : ${price}`)
}
// myfun3();

function myfun4(){
    let marks = Number(prompt("Enter your marks"))
    marks > 33 ? alert("Passed") : alert("Failed");
}
// myfun4();

function myfun5(){
    let num = Number(prompt("Enter number"));
    num % 2 === 0 ? alert("Even") : alert("Odd");
}
// myfun5();

function myfun6(){
    let a = confirm("Are you sure you want to delete");
    a  ? alert("Item Deleted") : alert("Cancelled");
}
// myfun6();

function myfun7(){
    let num = Number(prompt("Enter number"));
    num > 0 ? alert("Positive") : alert("Negative");
}
// myfun7();

function myfun8(){
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}
// myfun8();