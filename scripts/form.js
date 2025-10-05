const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductDropdown() {
    const productSelect = document.getElementById('ProductName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function(){
    populateProductDropdown();

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('installdate').value = today;
});

window.onload = function() {
    // This is the first part of your task. We need to get the current year.
    // We create a new Date object, which holds all the current date and time information.
    const today = new Date();
    // From that object, we extract just the full year (e.g., 2025).
    const currentYear = today.getFullYear();
    
    // Now we find the HTML element where we want to put the current year.
    // We use document.getElementById() to find the element with the ID "currentyear".
    const yearElement = document.getElementById("currentyear");
    
    // We check if the element exists to prevent any errors.
    if (yearElement) {
        // We set the text content to include the current year and your name.
        yearElement.textContent = "© " + currentYear + " Michael Mwidete, Tanzania"; ;
    }

    // This is the second part of your task. We need the last modified date.
    // The document object in JavaScript has a special property called .lastModified
    // that automatically knows when the file was last changed. We store that value in a variable.
    const lastModifiedDate = document.lastModified;

    // We find the HTML element for the last modified date, which has the ID "lastmodified".
    const modifiedElement = document.getElementById("lastmodified");

    // We check if the element exists.
    if (modifiedElement) {
        // We set the text content of this element to a new string that includes some descriptive text
        // and the last modified date we got earlier.
        modifiedElement.textContent = "Last Modification: " + lastModifiedDate;
    }
}
