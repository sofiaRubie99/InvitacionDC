function startCountdown() {
    // Fecha de la boda 
    const weddingDate = new Date('2025-01-18T17:00:00-06:00').getTime(); // Hora en UTC-6 (Costa Rica)

    setInterval(function() {
        // Fecha y hora actual ajustada automáticamente a la zona horaria local 
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (timeLeft < 0) {
            clearInterval();
            document.getElementById('countdown').innerHTML = "<p>¡Es el gran día!</p>";
        }
    }, 1000);
}

window.onload = startCountdown;
