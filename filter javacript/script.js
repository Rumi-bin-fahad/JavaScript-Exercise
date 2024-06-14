const products = [
    { title: 'Summer Brief', price: 799, rating: 3.5, img: 'https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small_2x/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg', features: ['Free Delivery', 'Best Price Guaranteed'] },
    { title: 'Office Use', price: 789, rating: 3.2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoW_mE460qYGyxg_FKdZRsiwmb_dU3j9Mx1g&s', features: ['Free Delivery'] },
    { title: 'Product 3', price: 699, rating: 3.0, img: 'https://condomshop.pk/cdn/shop/products/plain-blue-tshirt_grande.jpg?v=1449214640', features: ['Free Delivery', 'Daraz Verified'] },
    { title: 'Polo Itlay', price: 2099, rating: 5.0, img: 'https://mir-s3-cdn-cf.behance.net/projects/404/1aa6ef159481151.Y3JvcCwyNTU2LDIwMDAsMjE1LDA.jpg', features: ['Free Delivery', 'Cash On Delivery'] },
    { title: 'Boys COol', price: 1376, rating: 3.4, img: 'https://media.e-valy.com/cms/products/images/b4c760f7-ab26-42d9-91bb-bb54f0db786c', features: ['Free Delivery', 'Cash On Delivery'] },
    { title: 'Handsome Shirt', price: 350, rating: 1.4, img: 'https://fabrilife.com/products/64944f852b247-square.jpg', features: ['Free Delivery', 'Cash On Delivery'] },
    { title: 'The Mens', price: 999, rating: 4.4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviqWTDP5I2fBiXRx9GxwuCoKMPDjyJwtABQ&s', features: ['Free Delivery', 'Cash On Delivery'] },
    { title: 'Red Alert', price: 1034, rating: 4.3, img: 'https://alyandval.com/wp-content/uploads/2021/11/Blue-polo-tshirt-with-collar.webp', features: ['Free Delivery', 'Cash On Delivery'] },
    { title: 'Captain Awsome', price: 1700, rating: 4.7, img: 'https://static-01.daraz.pk/p/1ed9dfb12ea59fbd5ca37ea6f47f8b66.jpg', features: ['Free Delivery', 'Cash On Delivery'] },
];

const cardsContainer = document.getElementById('cards');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const filterCheckboxes = document.querySelectorAll('.filter');
const sortSelect = document.getElementById('sort');

function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    img.src = product.img;
    
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    const title = document.createElement('div');
    title.className = 'card-title';
    title.innerText = product.title;
    
    const price = document.createElement('div');
    price.className = 'card-price';
    price.innerText = `Rs. ${product.price}`;
    
    const rating = document.createElement('div');
    rating.className = 'card-rating';
    rating.innerText = `Rating: ${product.rating}`;
    
    cardContent.appendChild(title);
    cardContent.appendChild(price);
    cardContent.appendChild(rating);
    card.appendChild(img);
    card.appendChild(cardContent);
    
    return card;
}

function displayProducts(products) {
    cardsContainer.innerHTML = '';
    products.forEach(product => {
        const card = createCard(product);
        cardsContainer.appendChild(card);
    });
}

function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedFilters = Array.from(filterCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    let filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchText);
        const matchesFilters = selectedFilters.every(filter => product.features.includes(filter));
        return matchesSearch && matchesFilters;
    });

    displayProducts(filteredProducts);
}

searchButton.addEventListener('click', filterProducts);

filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

sortSelect.addEventListener('change', (e) => {
    const sortValue = e.target.value;
    let sortedProducts = [...products];

    if (sortValue === 'price-low-high') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high-low') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating') {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(sortedProducts);
});

// Initial display
displayProducts(products);
