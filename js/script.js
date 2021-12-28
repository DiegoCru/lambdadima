
/// var price = 4.04;
/// var amount = document.getElementById("numberTickets").value;



/// var totalPrice = price * amount;

/// document.getElementById("totalPrice").innerHTML = totalPrice;




document.getElementById("numberTickets").addEventListener("change", myFunction);

function myFunction() {
    price = 4.04;
    mini = 1
    maxi = 100
    var amount = document.getElementById("numberTickets").value;



    if (amount < mini){
        document.getElementById("numberTickets").value = mini
        amount = mini
    }
    else if (amount > maxi){
        document.getElementById("numberTickets").value = maxi
        amount = maxi
    }

    var totalPrice = price * amount;
    document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2);;
}