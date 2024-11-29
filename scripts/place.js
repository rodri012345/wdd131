function calculateWindChill(temperature, windSpeed) {
    return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    const temperature = 8; 
    const windSpeed = 10; 
    const windChillElement = document.getElementById("wind-chill");

    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`; 
    } else {
        windChillElement.textContent = "N/A";
    }
}


function displayFooterInfo() {
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearElement.textContent = currentYear; 
    lastModifiedElement.textContent = lastModified; 
}


window.onload = function () {
    displayWindChill();
    displayFooterInfo();
};
