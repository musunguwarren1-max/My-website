function scrollToForm() {
    document.getElementById("connect").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("connectForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let number = document.getElementById("number").value;

    // Fake pairing code for now
    let pairingCode = Math.floor(100000 + Math.random() * 900000);

    document.getElementById("response").innerHTML =
        `<p>Your pairing code: <strong>${pairingCode}</strong></p>
         <p>Please contact admin to complete connection.</p>`;
});
