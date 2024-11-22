// Select elements
const themeSelect = document.getElementById("theme-select");
const listStyleSelect = document.getElementById("list-style-select");
const dynamicList = document.getElementById("dynamic-list");

// Function to apply preferences
function applyPreferences(preferences) {
  document.body.className = preferences.theme;
  dynamicList.className = `list-style-${preferences.listStyle}`;
}

// Function to save preferences to localStorage
function savePreferences(preferences) {
  localStorage.setItem("pagePreferences", JSON.stringify(preferences));
}

// Function to get preferences from localStorage
function getPreferences() {
  const storedPreferences = localStorage.getItem("pagePreferences");
  return storedPreferences
    ? JSON.parse(storedPreferences)
    : { theme: "light", listStyle: "disc" };
}

// Initialize the page
function initPage() {
  // Add items to the list dynamically
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    dynamicList.appendChild(li);
  });

  // Load preferences from localStorage
  const preferences = getPreferences();
  applyPreferences(preferences);

  // Set the dropdowns to match the saved preferences
  themeSelect.value = preferences.theme;
  listStyleSelect.value = preferences.listStyle;

  // Add event listeners
  themeSelect.addEventListener("change", () => {
    preferences.theme = themeSelect.value;
    applyPreferences(preferences);
    savePreferences(preferences);
  });

  listStyleSelect.addEventListener("change", () => {
    preferences.listStyle = listStyleSelect.value;
    applyPreferences(preferences);
    savePreferences(preferences);
  });
}

// Run the initialization
document.addEventListener("DOMContentLoaded", initPage);