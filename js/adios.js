
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

const sendEthButton = document.querySelector('.buy-btn');
const ethereumButton = document.querySelector('.connect-wallet');

let accounts = [];


async function switchChain() {
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
    });
}

async function buyTicket() {
    await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
            from: accounts[0],
            to: '0x3680102D0ca2e90EFdf34Be2ca70414168464456',
            value: '0x' + (document.getElementById("totalPrice").innerHTML*(10**18)).toString(16),
            chainId: '0x61'
            },
        ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
}

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
    buyTicket()
});

sendEthButton.addEventListener('mouseover', () => {
    switchChain();
});



ethereumButton.addEventListener('click', () => {
    switchChain();
    getAccount();
    showHideError();
});

function showHideError() {

    if (typeof window.ethereum == 'undefined') {
        var error = document.getElementById("error");
        error.style.display = "block";
        error.innerText = "No crypto wallet found. Please install it.";
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

async function switchChain() {
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
    });
}