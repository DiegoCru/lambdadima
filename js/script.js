
/// var price = 4.04;
/// var amount = document.getElementById("numberTickets").value;



/// var totalPrice = price * amount;

/// document.getElementById("totalPrice").innerHTML = totalPrice;




document.getElementById("numberTickets").addEventListener("change", myFunction);

function myFunction() {
    price = 0.05;
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


const ethereumButton = document.querySelector('.connect-wallet');
const sendEthButton = document.querySelector('.buy-btn');

let accounts = [];



ethereumButton.addEventListener('click', () => {
    getAccount();
    showHideError();
});

function showHideError() {

    if (typeof window.ethereum == 'undefined') {
        var error = document.getElementById("error");
        error.style.display = "block";
        error.innerText = "No crypto wallet found. Please install it.";
        console.log('MetaMask is uninstalled!');
    }
    else {
        x.style.display = "none";
    }
}

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];

    document.getElementById("wallet").innerText = account.slice(0, 5) + "..." + account.slice(-4)
}










//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
    ethereum
        .request({
        method: 'eth_sendTransaction',
        params: [
            {
            from: accounts[0],
            to: '0x3680102D0ca2e90EFdf34Be2ca70414168464456',
            value: '0x' + (document.getElementById("totalPrice").innerHTML*(10**18)).toString(16),
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
});


