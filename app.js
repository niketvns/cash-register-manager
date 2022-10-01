var tt = document.querySelector(".desktop .tt");
var fh = document.querySelector(".desktop .fh");
var oh = document.querySelector(".desktop .oh");
var tw = document.querySelector(".desktop .tw");
var ten = document.querySelector(".desktop .ten");
var five = document.querySelector(".desktop .five");
var two = document.querySelector(".desktop .two");
var one = document.querySelector(".desktop .one");
var returnAmount = document.querySelector(".return-change-div");

var button = document.querySelector("button");

function returnCash(return_amount) {

    if (return_amount < 0) {
        returnAmount.innerHTML = "Take Rs. " + (-return_amount) + " more from customer";
        returnAmount.style.color = "#f97316"
    } else {
        if (return_amount == 0) {
            alert("Nothing to return");
        }
        returnAmount.innerHTML = "Return Amount: " + return_amount + " Rs.";
        returnAmount.style.color = "green";
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

    if (bill_amout < 0 || cash_given < 0 || bill_amout.length == 0 || cash_given.length == 0) {
        returnAmount.innerHTML = "Invalid Entry";
        returnAmount.style.color = "red"
    } else {
        returnCash(return_amount);
    }
}

button.addEventListener("click", getValues);