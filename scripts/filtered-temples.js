document.addEventListener("DOMContentLoaded", () => {
    const templeContainer = document.getElementById("temple-container");
    const ageFilter = document.getElementById("age-filter");
    const sizeFilter = document.getElementById("size-filter");
    const applyFiltersBtn = document.getElementById("apply-filters");

    // Example array of temple objects
    const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
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
