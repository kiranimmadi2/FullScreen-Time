let timeFormat = "hh:mm:ss"; // Default time format

function updateTime() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clock.textContent =
        timeFormat === "hh:mm" ? `${hours}:${minutes}` : `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();

// Fullscreen functionality
const fullscreenBtn = document.getElementById("fullscreen-btn");
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Detect when exiting fullscreen
document.addEventListener("fullscreenchange", () => {
    fullscreenBtn.textContent = document.fullscreenElement
        ? "Exit Fullscreen"
        : "Enter Fullscreen";
});

// Handle time format changes
document.getElementById("time-format").addEventListener("change", (event) => {
    timeFormat = event.target.value;
    updateTime();
});

// Handle clock color change
document.getElementById("clock-color").addEventListener("input", (event) => {
    document.getElementById("clock").style.color = event.target.value;
});

// Handle background color change
document.getElementById("background-color").addEventListener("input", (event) => {
    document.body.style.backgroundColor = event.target.value;
    document.body.style.backgroundImage = ""; // Reset custom wallpaper
});

// Handle custom wallpaper upload
document.getElementById("custom-wallpaper").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.body.style.backgroundImage = `url(${e.target.result})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";
        };
        reader.readAsDataURL(file);
    }
});

// Handle font size change
document.getElementById("font-size").addEventListener("input", (event) => {
    document.getElementById("clock").style.fontSize = `${event.target.value}px`;
});

// Handle font style change
document.getElementById("font-style").addEventListener("change", (event) => {
    document.getElementById("clock").style.fontFamily = event.target.value;
});
