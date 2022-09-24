var tt = document.querySelector(".tt");
var fh = document.querySelector(".fh");
var oh = document.querySelector(".oh");
var tw = document.querySelector(".tw");
var ten = document.querySelector(".ten");
var five = document.querySelector(".five");
var two = document.querySelector(".two");
var one = document.querySelector(".one");

var button = document.querySelector("button");

function returnCash(return_amount) {
    if (return_amount < 0) {
        alert("Take Rs. " + (-return_amount) + " more from customer");
    } else {
        if (return_amount == 0) {
            alert("Nothing to return");
        }
        var tt_note = ~~(return_amount / 2000);
        tt.innerHTML = tt_note;
        return_amount = return_amount % 2000;
        var fh_note = ~~(return_amount / 500);
        fh.innerHTML = fh_note;
        return_amount = return_amount % 500;
        var oh_note = ~~(return_amount / 100);
        oh.innerHTML = oh_note;
        return_amount = return_amount % 100;
        var tw_note = ~~(return_amount / 20);
        tw.innerHTML = tw_note;
        return_amount = return_amount % 20;
        var ten_note = ~~(return_amount / 10);
        ten.innerHTML = ten_note;
        return_amount = return_amount % 10;
        var five_note = ~~(return_amount / 5);
        five.innerHTML = five_note;
        return_amount = return_amount % 5;
        var two_note = ~~(return_amount / 2);
        two.innerHTML = two_note;
        return_amount = return_amount % 2;
        var one_note = ~~(return_amount / 1);
        one.innerHTML = one_note;
        return_amount = return_amount % 1;
    }
}


function getValues() {
    var bill_amout = document.querySelector(".input1").value;
    var cash_given = document.querySelector(".input2").value;
    var return_amount = cash_given - bill_amout;
    returnCash(return_amount);
}

button.addEventListener("click", getValues);