document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.getElementById("temple-container");
    const ageFilter = document.getElementById("age-filter");
    const sizeFilter = document.getElementById("size-filter");
    const applyFiltersBtn = document.getElementById("apply-filters");

    // Example array of temple objects
    const temples = [
        { name: "Salt Lake Temple", location: "Utah, USA", year: 1893, size: "large", image: "salt_lake.jpg" },
        { name: "Laie Hawaii Temple", location: "Hawaii, USA", year: 1919, size: "small", image: "laie_hawaii.jpg" },
        { name: "Tokyo Japan Temple", location: "Tokyo, Japan", year: 1980, size: "large", image: "tokyo_japan.jpg" },
        { name: "Cedar City Temple", location: "Utah, USA", year: 2017, size: "small", image: "cedar_city.jpg" }
    ];

    // Function to generate temple cards
    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = ""; // Clear existing content
        filteredTemples.forEach(temple => {
            const card = document.createElement("div");
            card.classList.add("temple-card");

            card.innerHTML = `
                <img src="${temple.image}" alt="${temple.name}">
                <h3>${temple.name}</h3>
                <p>${temple.location}</p>
                <p>Dedicated: ${temple.year}</p>
            `;

            templeContainer.appendChild(card);
        });
    }

    // Function to filter temples
    function filterTemples() {
        let filteredTemples = temples;

        const selectedAge = ageFilter.value;
        const selectedSize = sizeFilter.value;

        // Filter by Age
        if (selectedAge === "old") {
            filteredTemples = filteredTemples.filter(temple => temple.year < 1950);
        } else if (selectedAge === "modern") {
            filteredTemples = filteredTemples.filter(temple => temple.year >= 1950);
        }

        // Filter by Size
        if (selectedSize !== "all") {
            filteredTemples = filteredTemples.filter(temple => temple.size === selectedSize);
        }

        // Display the filtered results
        displayTemples(filteredTemples);
    }

    // Event Listener for filter button
    applyFiltersBtn.addEventListener("click", filterTemples);

    // Initial display of all temples
    displayTemples(temples);
});
