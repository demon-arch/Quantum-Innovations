// Fetch products from the JSON file and dynamically populate the featured products section
fetch('data/products.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('products-container');
    
    // Loop through the first 3 products to create featured product cards
    data.products.slice(0, 3).forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('col-md-4', 'mb-4');

      productCard.innerHTML = `
        <div class="card">
          <img src="${product.image_url}" alt="${product.name}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <a href="/html/product-details.html?id=${product.id}" class="btn btn-warning">View Details</a>
          </div>
        </div>
      `;
      productContainer.appendChild(productCard);
    });
  })
  .catch(error => console.error('Error loading products:', error));
  const viewProduct = document.getElementById('view-more-btn');

  viewProduct.addEventListener('click', function() {
      window.location.href = '/html/products.html'; // Change 'products.html' to your actual products page URL
  });
  
  

