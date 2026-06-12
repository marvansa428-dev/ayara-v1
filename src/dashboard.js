const salutation = document.getElementById("salutation");

const heure = new Date().getHours();

let message = "";

if (heure < 12) {
    message = "Mbolo! Christ";
}
else if (heure < 18) {
    message = "Bonsoir, Christ";
}
else {
    message = "Salut, couche-tard";
}

salutation.textContent = message;