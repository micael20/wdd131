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

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const reviewDiv = document.getElementById('reviewData');

// Show the review data
if (urlParams.toString()) {
    let html = '<h2>Your Review</h2>';
    
    // Product
    const productId = urlParams.get('ProductName');
    const product = products.find(p => p.id === productId);
    html += `<p><strong>Product:</strong> ${product ? product.name : productId}</p>`;
    
    // Rating
    const rating = urlParams.get('rating');
    if (rating) {
        html += `<p><strong>Rating:</strong> ${'⭐'.repeat(parseInt(rating))}</p>`;
    } else {
        html += `<p><strong>Rating:</strong> No rating provided</p>`;
    }
  
    // Date
    const date = urlParams.get('installdate');
    html += `<p><strong>Install Date:</strong> ${date}</p>`;
    
    // Features
    const features = urlParams.getAll('features');
    if (features.length > 0) {
        html += `<p><strong>Features:</strong> ${features.join(', ')}</p>`;
    }
    
    // Review text
    const reviewText = urlParams.get('writtenreview');
    if (reviewText) {
        html += `<p><strong>Your Review:</strong> ${reviewText}</p>`;
    }
    
    // User name
    const userName = urlParams.get('username');
    if (userName) {
        html += `<p><strong>From:</strong> ${userName}</p>`;
    }
    
    reviewDiv.innerHTML = html;
} else {
    reviewDiv.innerHTML = '<p>No review data found.</p>';
}

