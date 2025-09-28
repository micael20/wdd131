const hamButton = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});

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
{
    templeName: "Fairbanks Alaska",
    location: "Fairbanks, Alaska, United States",
    dedicated: "2025, September, 25",
    area: 10000,
    imageUrl:
    "images/fairbanks-alaska-temple-55375-ma.jpg"

},
{
    templeName: "Freiberg Germany",
    location: "Freiberg, Germany",  
    dedicated: "1985, June, 30",
    area: 21500,
    imageUrl:
    "images/freiberg-germany-temple-16459-ma.jpg"  
},
{
    templeName: "Rome Italy",
    location: "Rome, Italy",  
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
    "images/rome-italy-temple-2642-main.jpg" 
    
}

];

createTempleCard(temples);

const homeLink = document.getElementById('Home');
const oldLink = document.getElementById('Old');
const newLink = document.getElementById('New');
const largeLink = document.getElementById('Large');
const smallLink = document.getElementById('Small');

homeLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => true )); //
});

oldLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => !temple.dedicated <= "1900-01-01")); 
});

newLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.dedicated >= "2000-01-01")); 
});

largeLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area >= 90000)); 
});

smallLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples) {
    document.querySelector('.res-grid').innerHTML = '';
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedicated = document.createElement('p');
        let area = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', `Image of ${temple.templeName}`);
        image.setAttribute('loading', 'lazy');


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector('.res-grid').appendChild(card);

    });
}


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