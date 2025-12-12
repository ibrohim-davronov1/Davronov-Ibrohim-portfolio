import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Savat komponenti (bitta faylda, komponentlarsiz)
const Cart = () => {
  const [items, setItems] = useState([]);

  // localStorage dan yuklash
  useEffect(() => {
    const saved = localStorage.getItem('miniMarketplaceCart');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // localStorage ga saqlash
  useEffect(() => {
    localStorage.setItem('miniMarketplaceCart', JSON.stringify(items));
  }, [items]);

  // Add to Cart event tinglash
  useEffect(() => {
    const handleAdd = (e) => {
      const product = e.detail;
      setItems(prev => {
        const existing = prev.find(i => i.id === product.id);
        if (existing) {
          return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
        }
        return [...prev, { ...product, quantity: 1 }];
      });
    };
    window.addEventListener('addToCart', handleAdd);
    return () => window.removeEventListener('addToCart', handleAdd);
  }, []);

  const increase = (id) => setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  const decrease = (id) => setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i));
  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const clear = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div>
        <h2>Savat</h2>
        <p>Savat bo'sh</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Savat ({items.length} ta mahsulot)</h2>
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '20px' }} />
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 10px 0' }}>{item.title.length > 40 ? item.title.substring(0, 40) + '...' : item.title}</h4>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#27ae60' }}>${item.price.toFixed(2)} x {item.quantity}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => decrease(item.id)} style={{ padding: '8px 12px' }}>-</button>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{item.quantity}</span>
            <button onClick={() => increase(item.id)} style={{ padding: '8px 12px' }}>+</button>
          </div>
          <button onClick={() => remove(item.id)} style={{ marginLeft: '20px', color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>
            O'chirish
          </button>
        </div>
      ))}
      <div style={{ marginTop: '30px', padding: '20px', borderTop: '2px solid #ddd', textAlign: 'right' }}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Umumiy: ${total.toFixed(2)}</p>
        <button onClick={clear} style={{ background: '#e74c3c', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1rem' }}>
          Savatni tozalash
        </button>
      </div>
    </div>
  );
};

// Mahsulotlarni yuklash (Vanilla JS)
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
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

    document.querySelectorAll('.product-card button').forEach(button => {
      button.addEventListener('click', (e) => {
        const product = {
          id: e.target.dataset.id,
          title: e.target.dataset.title,
          price: parseFloat(e.target.dataset.price),
          image: e.target.dataset.image
        };
        window.dispatchEvent(new CustomEvent('addToCart', { detail: product }));
      });
    });
  });

// React savatni render qilish
ReactDOM.createRoot(document.getElementById('cart-root')).render(<Cart />);