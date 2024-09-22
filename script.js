function updateTime() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`; // Added seconds
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();

// Fullscreen functionality
const fullscreenBtn = document.getElementById("fullscreen-btn");
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.style.display = "none"; // Hide button once fullscreen is entered
    }
});

// Detect when exiting fullscreen and show the button again
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.style.display = "block"; // Show button after exiting fullscreen
    }
});
