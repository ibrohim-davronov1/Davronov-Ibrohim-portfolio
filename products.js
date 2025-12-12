// Hardcode mahsulotlar (API ishlamasa ham ishlaydi)
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    image: "https://fakestoreapi.com/img/71p7V1N9oL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    image: "https://fakestoreapi.com/img/61sbKvhN9rL._AC_UL640_QL65_ML3_.jpg"
  }
];

const productsContainer = document.getElementById('products');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h3>${product.title.length > 50 ? product.title.substring(0, 50) + '...' : product.title}</h3>
    <div class="price">$${product.price.toFixed(2)}</div>
    <button data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image}">
      Add to Cart
    </button>
  `;
  
  productsContainer.appendChild(card);
});

// Add to Cart tugmalariga event
document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', (e) => {
    const product = {
      id: e.target.dataset.id,
      title: e.target.dataset.title,
      price: parseFloat(e.target.dataset.price),
      image: e.target.dataset.image,
      quantity: 1
    };
    window.dispatchEvent(new CustomEvent('addToCart', { detail: product }));
  });
});