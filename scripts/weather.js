// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

// Function to update the weather card
function updateWindChill() {
    const temp = 5; // Static temperature in Celsius
    const windSpeed = 10; // Static wind speed in km/h

    const windChillElement = document.getElementById('windChill');

    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Update footer with current year and last modified date
function updateFooter() {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearElement.textContent = currentYear;
    lastModifiedElement.textContent = lastModified;
}

// Initialize page content
document.addEventListener('DOMContentLoaded', () => {
    updateWindChill();
    updateFooter();
});
