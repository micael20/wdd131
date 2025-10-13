const vesselClasses = [
    {
        className: "Naval Vessels",
        vessels: [
            {
                name: "Aircraft Carrier",
                description: "Large warship that serves as a mobile airbase for aircraft operations at sea.",
                image: "/images/aircraft-carrier.jpg"
            },

            {
                name: "Frigate",
                description: "Medium-sized warship used for protecting other ships and anti-submarine warfare.",
                image: "/images/frigate-ship.jpeg"
            },
            {
                name: "Submarine",
                description: "Underwater vessel capable of independent operation below the surface of the water.",
                image: "images/submarine-vessel.webp"
                
            },
            {
                name: "Destroyer",
                description: "Fast, maneuverable warship designed to escort larger vessels in a fleet.",
                image: "/images/destroyer.jpeg"
            }
        ]
    },
    {
        className: "Dry Cargo Ships",
        vessels: [
            {
                name: "Container Ship",
                description: "Carries goods in large metal containers that can be easily loaded and unloaded.",
                image: "/images/container-ship.webp"
            },
            {
                name: "Ro-Ro Ship",
                description: "Designed to carry wheeled cargo that can be rolled on and off the ship.",
                image: "/images/Ro-Ro-Ship.jpeg"
            },
            {
                name: "Refrigerated Ship",
                description: "Specialized vessel with cooling systems to transport perishable food items.",
                image: "/images/drill-ship.webp"
            },

            {
                name: "Ore Carrier",
                description: "Large bulk carrier designed specifically for transporting minerals and ores.",
                image:"/images/ore-carrier-ship.jpeg"
            }
        ]
    },
    {
        className: "Liquid Cargo Ships", 
        vessels: [
            {
                name: "Crude Carrier",
                description: "Massive tankers designed to transport unrefined crude oil across oceans.",
                image: "/images/crude-carrier.jpeg"
            },
            {
                name: "Product Tanker",
                description: "Carries refined petroleum products like gasoline, diesel, and jet fuel.",
                image: "/images/product-tanker.jpeg"
            },
            {
                name: "LPG/LNG Carrier",
                description: "Specialized tankers that transport liquefied gases at very low temperatures.",
                image: "/images/LNG-tanker.jpeg"
            }
        ]
    },
    {
        className: "Passenger Ships",
        vessels: [
            {
                name: "Cruise Ship",
                description: "Floating resorts designed for vacation voyages with entertainment and amenities.",
                image: "/images/cruise-ship.jpeg"
            },
            {
                name: "Car and Passenger Ferries",
                description: "Transports people and their vehicles across rivers, lakes, or short sea routes.",
                image: "/images/ferry-ship.jpeg"
            },

        ]
    },
    {
        className: "Fishing Vessels",
        vessels: [
            {
                name: "Trawlers",
                description: "Fishing boats that drag large nets through the water to catch fish.",
                image: "/images/trawler-ship.jpeg"
            },

        ]
    },
    {
        className: "Dredgers",
        vessels: [
            {
                name: "Trailing Hopper Dredger",
                description: "Collects sediment from seabed while moving and stores it in onboard hoppers.",
                image: "/images/trailing-hopper-dredger.jpeg"
            },
            {
                name: "Suction Hopper Dredger",
                description: "Uses powerful suction to remove materials from harbor bottoms and channels.",
                image: "/images/suction-hopper-dredger.jpeg"
            },
            {
                name: "Cutter Suction Dredger",
                description: "Has rotating cutters to break up hard materials before suction removal.",
                image: "/images/cutter-suction-dredger.jpeg"
            }
        ]
    },
    {
        className: "Work Ships",
        vessels: [
            {
                name: "Crane Vessels",
                description: "Floating cranes used for heavy lifting operations in construction and salvage.",
                image: "/images/crane-vessel.jpeg"
            },
            {
                name: "Cable-Layers",
                description: "Specialized ships that install underwater communication and power cables.",
                image: "/images/cable-ship.jpeg"
            },
            {
                name: "Buoy-Layers",
                description: "Maintains and positions navigation buoys and other marine markers.",
                image: "/images/Buoy-Laying-Vessel.jpeg"
            },

        ]
    },
    {
        className: "Yachts",
        vessels: [
            {
                name: "Motor Yachts",
                description: "Luxury recreational boats powered by engines, often with luxurious amenities.",
                image: "/images/motor-yacht.jpeg"
            },
            {
                name: "Sailing Yachts",
                description: "Recreational boats primarily powered by wind using sails.",
                image: "/images/sailing-yacht.jpeg"
            }
        ]
    },
    {
        className: "Auxiliary Vessels",
        vessels: [
            {
                name: "Icebreakers",
                description: "Powerful ships designed to break through ice-covered waters.",
                image: "/images/icebreaker-ship.jpeg"
            },
            {
                name: "Pilot Vessels",
                description: "Transports maritime pilots to guide large ships safely into ports.",
                image: "/images/pilot-vessel.jpeg"
            },
            {
                name: "Research Vessels",
                description: "Equipped with laboratories and equipment for oceanographic research.",
                image: "/images/research-ship.jpeg"
            },
            {
                name: "Harbour Tugs",
                description: "Small, powerful boats that assist large ships with maneuvering in ports.",
                image: "/images/harbour-tug.jpeg"
            }
        ]
    },
    {
        className: "Fast Craft",
        vessels: [
            {
                name: "Catamaran",
                description: "Twin-hulled design providing excellent stability and speed.",
                image: "/images/catamaran.jpeg"
            },
            {
                name: "Axe Bow",
                description: "Innovative bow design that cuts through waves for smoother high-speed travel.",
                image: "/images/axe-bow-ship.webp"
            },
            {
                name: "SWATH",
                description: "Small Waterplane Area Twin Hull design for exceptional stability in rough seas.",
                image: "/images/swath-ship.jpeg"
            }
        ]
    },
    {
        className: "Offshore Equipment",
        vessels: [
            {
                name: "Drilling Ships",
                description: "Mobile vessels capable of drilling oil wells in deep ocean waters.",
                image: "/images/drill-ship.webp"
            },
            {
                name: "Jack Up Rigs",
                description: "Mobile platforms with extendable legs that stand on the sea floor for drilling.",
                image: "/images/jack-up-rig.webp"
            },
            {
                name: "FPSO",
                description: "Floating Production Storage and Offloading unit for processing oil at sea.",
                image: "/images/fpso-vessel.jpeg"
            }
        ]
    }
];

// Mobile navigation toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Display all vessels by class
function displayVesselsByClass() {
    const container = document.getElementById('vesselsContainer');
    if (!container) return;

    container.innerHTML = '';

    vesselClasses.forEach(vesselClass => {
        // Create section for each class
        const classSection = document.createElement('div');
        classSection.className = 'class-section';
        
        classSection.innerHTML = `
            <h2>${vesselClass.className}</h2>
            <div class="vessel-grid" id="grid-${vesselClass.className.replace(/\s+/g, '-')}">
                <!-- Vessels will be added here -->
            </div>
        `;

        container.appendChild(classSection);

        // Get the grid for this class
        const grid = document.getElementById(`grid-${vesselClass.className.replace(/\s+/g, '-')}`);
        
        // Add each vessel as a card
        vesselClass.vessels.forEach(vessel => {
            const card = document.createElement('div');
            card.className = 'vessel-card';
            card.innerHTML = `
                <img src="${vessel.image}" alt="${vessel.name}" class="vessel-image">
                <div class="vessel-info">
                    <h3>${vessel.name}</h3>
                    <p>${vessel.description}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    });
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    
    // Display vessels if on vessels page
    if (document.getElementById('vesselsContainer')) {
        displayVesselsByClass();
    }
});