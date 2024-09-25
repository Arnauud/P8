// Sélectionner le bouton et le paragraphe
const button = document.getElementById('myButton');

// Créer un paragraphe pour afficher le message
const messageParagraph = document.createElement('p');
document.body.appendChild(messageParagraph);

// Ajouter un gestionnaire d'événements pour détecter le clic sur le bouton
button.addEventListener('click', function() {
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});