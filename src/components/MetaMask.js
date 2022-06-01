async function MetaMask() {

    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        document.getElementById("metamask").innerHTML = "Connected";
        console.log("connect");


    }
    else {
        document.getElementById("metamask").innerHTML = "Install MetaMask Hero";
        console.log("noconnection");
    }

};
export default MetaMask;
