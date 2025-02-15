document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tips-form");
    const tipsList = document.getElementById("tips-list");
    const nameInput = document.getElementById("name");
    const tipInput = document.getElementById("tip");

    // Load stored tips from localStorage
    function loadTips() {
        const tips = JSON.parse(localStorage.getItem("travelTips")) || [];
        tipsList.innerHTML = "";
        tips.forEach(tip => displayTip(tip));
    }

    // Display a new tip in the list
    function displayTip(tip) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${tip.name}:</strong> ${tip.message}`;
        tipsList.appendChild(li);
    }

    // Save tip to localStorage
    function saveTip(name, message) {
        const tips = JSON.parse(localStorage.getItem("travelTips")) || [];
        const newTip = { name, message };
        tips.push(newTip);
        localStorage.setItem("travelTips", JSON.stringify(tips));
        displayTip(newTip);
    }

    // Handle form submission
    form.addEventListener("submit", event => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const message = tipInput.value.trim();

        if (name && message) {
            saveTip(name, message);
            form.reset();
        }
    });

    loadTips(); // Load tips when page loads
});
