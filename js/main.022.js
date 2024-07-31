function updateCountdown() {
    const now = new Date().getTime();
    const eventDate = new Date('aug 30, 2024 23:59:59').getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector("[data-testid='fcc-container']").innerHTML = "Event Ended";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days-tens").textContent = Math.floor(days / 10);
    document.getElementById("days-ones").textContent = days % 10;

    document.getElementById("hours-tens").textContent = Math.floor(hours / 10);
    document.getElementById("hours-ones").textContent = hours % 10;

    document.getElementById("minutes-tens").textContent = Math.floor(minutes / 10);
    document.getElementById("minutes-ones").textContent = minutes % 10;

    document.getElementById("seconds-tens").textContent = Math.floor(seconds / 10);
    document.getElementById("seconds-ones").textContent = seconds % 10;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();