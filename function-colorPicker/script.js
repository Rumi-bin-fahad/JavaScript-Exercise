function changeColor() {
    var colorInput = document.getElementById("colorInput").value;
    var colors = colorInput.split(",");
    var brightness = document.getElementById("brightnessRange").value / 100; // Convert to percentage
    if (colors.length === 3) {
        var r = parseInt(colors[0]);
        var g = parseInt(colors[1]);
        var b = parseInt(colors[2]);
        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
            // Adjust brightness
            r = Math.min(255, Math.max(0, Math.round(r * brightness)));
            g = Math.min(255, Math.max(0, Math.round(g * brightness)));
            b = Math.min(255, Math.max(0, Math.round(b * brightness)));
            document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
            // Change text color based on background brightness
            var brightnessThreshold = 128; // Adjust as needed
            var brightnessValue = (r * 299 + g * 587 + b * 114) / 1000; // Calculate brightness according to W3C standards
            if (brightnessValue < brightnessThreshold) {
                document.body.style.color = "white";
            } else {
                document.body.style.color = "black";
            }
        } else {
            alert("Invalid color code! Please enter valid RGB values.");
        }
    } else {
        alert("Invalid color code format! Please enter RGB values separated by commas.");
    }
}
