const data = [
    "Water sustainability",
    "Sustainable water solutions",
    "Surface water",
    "Groundwater",
    "Reclaimed water"
    // Add more search data as needed
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(query));

    // Clear previous search results
    searchResults.innerHTML = '';

    // Display search results
    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        searchResults.appendChild(li);
    });
});