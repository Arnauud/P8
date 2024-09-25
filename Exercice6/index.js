// Fonction pour ajouter des chiffres ou des opérateurs à l'affichage
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Ajoute le caractère à l'affichage
}

// Fonction pour calculer le résultat
function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        // Check for division by zero in the expression
        if (expression.includes("/0")) {
            display.value = 'Division by zero is not allowed';
            console.error("Division by zero is not allowed.");
        } else {
            // Evaluate the expression and update the result
            display.value = eval(expression);
        }
    } catch (error) {
        display.value = 'Erreur'; // Handle evaluation errors
        console.error("Division by zero is not allowed");
    }
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Réinitialise l'affichage
}