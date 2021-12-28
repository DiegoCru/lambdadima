
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

    if (amount % 1 != 0){
        amount = Math.floor(amount);
        document.getElementById("numberTickets").value = amount;
    }

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






/// MetaMask

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

else {
    console.log('MetaMask is installed!');
}


///const ethereumButton = document.querySelector('.connect-wallet');

///ethereumButton.addEventListener('click', () => {
  //Will Start the metamask extension
///  ethereum.request({ method: 'eth_requestAccounts' });
///});

const ethereumButton = document.querySelector('.connect-wallet');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];

  document.getElementById("wallet").innerText = account.slice(0, 5) + "..." + account.slice(-5, -1)
}