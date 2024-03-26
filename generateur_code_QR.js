const conteneur = document.querySelector(".wrapper"),
  qrInput = document.querySelector(".form input"),
  boutonGenerer = conteneur.querySelector(".form button"),
  imgQR = conteneur.querySelector(".qr-code img");

boutonGenerer.addEventListener("click", function () {
  let valeurQR = qrInput.value;
  if (!valeurQR) return; // si le champ est vide, sortir de la fonction
  boutonGenerer.innerText = "Génération du code QR en cours...";

  // API et en passant la source img retournée par l'API à imgQR
  imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${valeurQR}`;
  imgQR.onload = function () {
    // une fois que l'image du code QR est chargée
    conteneur.classList.add("active");
    boutonGenerer.innerText = "Générer un code QR";
  };
});
