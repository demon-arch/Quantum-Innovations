
 
  
  fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
          const productList = document.getElementById('products-list');
          
          data.products.forEach(product => {
              const productCard = document.createElement('div');
              productCard.classList.add('col-md-4', 'mb-4');

              productCard.innerHTML = `
                  <div class="card product-card">
                      <img src="${product.image_url}" alt="${product.name}" class="card-img-top product-image">
                      <div class="card-body product-card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <p class="card-text">${product.price}</p>
                          <a href="product-details.html?id=${product.id}" class="btn btn-warning">View Details</a>
                      </div>
                  </div>
              `;
              productList.appendChild(productCard);
          });
      })
      .catch(error => console.error('Error loading products:', error));
