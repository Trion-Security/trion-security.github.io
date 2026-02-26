document.addEventListener("DOMContentLoaded", () => {
    // Update certificate timer countdown
    const timerElement = document.querySelector(".card-status");
    if (timerElement) {
        let minutes = 14;
        let seconds = 59;

        setInterval(() => {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            if (minutes < 0) {
                minutes = 15; // Reset just for demo purposes
            }
            timerElement.innerHTML = `Valid &middot; ${minutes}m ${seconds.toString().padStart(2, '0')}s`;
        }, 1000);
    }

});
