const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Dynamically set the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");

    // Sample Product Array
    const products = [
        { id: "p1", name: "Smartphone" },
        { id: "p2", name: "Laptop" },
        { id: "p3", name: "Tablet" },
        { id: "p4", name: "Smartwatch" }
    ];

    // Populate Product Options
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
