function displayInput() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("output").textContent = userInput;
}
function startCountdown() {
    const input = document.getElementById("countdownInput").value;
    const [hours, minutes, seconds] = input.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || seconds < 0) {
        alert("Please enter a valid countdown duration in the format hk:mm:ss.");
        return;
    }
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    countdown(totalSeconds);
}
function countdown(totalSeconds) {
    const now = new Date().getTime();
    const targetDate = now + totalSeconds * 1000;
    const updateCountdown = () => {
        const difference = targetDate - new Date().getTime();
        if (difference <= 0) {
            clearInterval(intervalId);
            document.getElementById("countdown").innerHTML = "Countdown finished!";
            return;
        }
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `
            ${hours} hours ${minutes} minutes ${seconds} seconds
        `;
    };
    const intervalId = setInterval(updateCountdown, 1000);
}