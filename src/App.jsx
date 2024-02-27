document.addEventListener("DOMContentLoaded", function () {
  fetchProperties();
});

function fetchProperties() {
  fetch("http://localhost:3000/properties")
    .then((response) => response.json())
    .then((data) => {
      const propertiesElement = document.getElementById("properties");
      propertiesElement.innerHTML = ""; // Clear existing properties
      data.forEach((property) => {
        const propertyElement = document.createElement("div");
        propertyElement.textContent = `ID: ${property.id}, Address: ${property.address}, Occupied: ${property.occupied}`;
        propertiesElement.appendChild(propertyElement);
      });
    });
}
