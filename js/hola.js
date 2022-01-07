


const ethereumButton = document.querySelector('.connect-wallet');

let accounts = [];

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