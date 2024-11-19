let timeFormat = "hh:mm:ss"; // Default time format

function updateTime() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update clock content based on the selected format
    if (timeFormat === "hh:mm") {
        clock.textContent = `${hours}:${minutes}`;
    } else if (timeFormat === "hh:mm:ss") {
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime();

// Fullscreen functionality
const fullscreenBtn = document.getElementById("fullscreen-btn");
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.body.classList.add("fullscreen-active");
    }
});

// Detect when exiting fullscreen and show the controls again
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove("fullscreen-active");
    }
});

// Handle time format changes
document.getElementById("time-format").addEventListener("change", (event) => {
    timeFormat = event.target.value;
    updateTime();
});

// Handle color changes
document.getElementById("clock-color").addEventListener("input", (event) => {
    document.getElementById("clock").style.color = event.target.value;
});

document.getElementById("background-color").addEventListener("input", (event) => {
    document.body.style.backgroundColor = event.target.value;
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

// Handle font size changes
document.getElementById("font-size").addEventListener("input", (event) => {
    const fontSize = event.target.value;
    document.getElementById("clock").style.fontSize = `${fontSize}px`;
});

// Handle font style changes
document.getElementById("font-style").addEventListener("change", (event) => {
    const fontStyle = event.target.value;
    document.getElementById("clock").style.fontFamily = fontStyle;
});

