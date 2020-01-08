document.addEventListener("DOMContentLoaded", () => {
    setQR();
    setMetadata();
});

const setQR = function () {
    const element = document.getElementById("qr-code");
    new QRCode(element, window.location.href);
    element.childNodes[1].classList.add("mx-auto");
    element.childNodes[1].classList.add("w-25");
};

const setMetadata = function () {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        const element = document.getElementById("metadata");
        if (this.readyState == 4 &&
            this.status == 200) {
            const metadata = JSON.parse(this.responseText);
            const date = new Date(metadata.timestamp);
            element.innerText = "v" + metadata.version + "-" + metadata.timestamp + " (" + date.toLocaleString() + ")";
        } else {
            element.innerText = "Unknown Version";
        }
    };
    request.open("GET", "./metadata.json", true);
    request.send();
};