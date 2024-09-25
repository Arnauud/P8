function convertToBinary() {
    let decimalInput = document.getElementById('decimalInput').value; // Récupère la valeur de l'input
    let binaryResult = document.getElementById('binaryResult'); // Récupère l'élément pour afficher le résultat

    if (/[a-zA-Z]/.test(decimalInput)){
        binaryResult = ''
        return
    }

    // Convertir la valeur d'entrée en entier
    let decimalNumber = parseInt(decimalInput, 10);
    console.log(decimalNumber)

    // Convertir le nombre décimal en binaire
    let binaryString = '';

    // Vérifiez si l'entrée est un nombre valide
    if (isNaN(decimalNumber) || decimalNumber < 0) {
        binaryResult.textContent = '';
        decimalInput = ''
        return;
    } 

    // Effectuer la conversion
    let quotient = decimalNumber;
    while (quotient > 0) {
        const remainder = quotient % 2; // Reste de la division par 2
        binaryString = remainder.toString() + binaryString; // Concatène le reste en tête de la chaîne binaire
        quotient = Math.floor(quotient / 2); // Met à jour le quotient
    }

    // Affiche le résultat binaire
    binaryResult.textContent = 'Représentation binaire : ' + binaryString;
}