// Remplacez le numéro ci-dessous par le numéro WhatsApp Business de GED Store.
// Format international sans +, espaces ni tirets. Exemple Bénin : 229XXXXXXXX.
const whatsappNumber = "2290129286915";

const message = encodeURIComponent(
  "Bonjour GED Store 👋\n" +
  "Je suis intéressé(e) par la machine de gym intelligente tout-en-un à 1 594 693 F CFA.\n" +
  "Je souhaite avoir plus d'informations sur la commande et la livraison."
);

const whatsappBtn = document.getElementById("whatsappBtn");
whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${message}`;

document.getElementById("year").textContent = new Date().getFullYear();
