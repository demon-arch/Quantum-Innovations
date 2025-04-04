
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch the product data
fetch('/data/products.json')
    .then(response => response.json())
    .then(data => {
        const product = data.products.find(p => p.id === productId);

        if (product) {
            // Populate product details on the page
            const productDetails = document.getElementById('product-details');
            productDetails.innerHTML = `
                <div class="product-details-wrapper">
                    <div class="col-md-6">
                        <img src="${product.image_url}" alt="${product.name}" class="img-fluid product-image">
                    </div>
                    <div class="col-md-6 product-info">
                        <h2>${product.name}</h2>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Description:</strong></p>
                        <p>${product.description}</p>
                        <p><strong>Manufacturer:</strong> ${product.manufacturer}</p>
                        <p><strong>Rating:</strong> ${product.rating} ★</p>
                        <h4>Reviews</h4>
                        <ul>
                            ${product.reviews.map(review => `
                                <li>
                                    <strong>${review.user}:</strong> ${review.comment} (${review.rating} ★)
                                </li>
                            `).join('')}
                        </ul>
                        <button class="btn btn-warning" id="btn">Add to Cart</button>
                    </div>
                </div>
            `;

            // Add event listener to "Add to Cart" button
            const addToCartButton = document.getElementById('btn');
            addToCartButton.addEventListener('click', () => {
                // Create a popup with the message
                const popup = document.createElement('div');
                popup.classList.add('popup');
                popup.innerHTML = `
                    <div class="popup-content">
                        <p>This product is not in real time, so please wait while we make the product.</p>
                        <button class="close-popup">Close</button>
                    </div>
                `;

                // Add the popup to the body
                document.body.appendChild(popup);

                // Add an event listener to close the popup
                const closeButton = popup.querySelector('.close-popup');
                closeButton.addEventListener('click', () => {
                    popup.remove(); // Close the popup when clicked
                });
            });

        } else {
            document.getElementById('product-details').innerHTML = '<p>Product not found</p>';
        }
    })
    .catch(error => console.error('Error loading product details:', error));
