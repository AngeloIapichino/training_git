function getRandomInt(min, max) {
    // Assicurati che min e max siano interi
    min = Math.ceil(min);
    max = Math.floor(max);
    // Genera un numero intero casuale tra min (incluso) e max (incluso)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}