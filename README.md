# Mini Marketplace

Frontend Intern uchun test topshirig'i - Mini marketplace SPA ilova.

## 📋 Ism
ibrohim davronov

## ⏱️ Vazifa qancha vaqt oldi
19 soat

## 🚀 Texnologiyalar
- **React 18** - Savat (Cart) funksiyalari uchun
- **Vite** - Tez build tool
- **Vanilla JavaScript** - Mahsulotlarni yuklash va ko'rsatish uchun
- **CSS3** - Responsive dizayn (Flex/Grid)
- **FakeStore API** - Mahsulotlar ma'lumotlari

## ✨ Xususiyatlar
- ✅ Mahsulotlar ro'yxatini ko'rish (API'dan yuklash)
- ✅ Mahsulotlarni savatga qo'shish
- ✅ Mahsulotlarni savatdan o'chirish
- ✅ Miqdorni boshqarish (+ / - tugmalar)
- ✅ Umumiy summani hisoblash
- ✅ localStorage'da savatni saqlash
- ✅ Desktop va mobil uchun responsive dizayn
- ✅ Hover va active holatlar

## 📁 Loyiha tuzilishi
```
mini-marketplace/
├── src/
│   ├── components/
│   │   ├── Cart.jsx         # Asosiy savat komponenti (useState, useEffect)
│   │   ├── CartList.jsx     # Savat ro'yxati
│   │   └── CartItem.jsx     # Bitta savat elementi
│   ├── styles/
│   │   ├── normalize.css    # CSS reset
│   │   └── main.css         # Asosiy stillar
│   ├── products.js          # Vanilla JS - mahsulotlar
│   └── main.jsx            # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ O'rnatish va ishga tushirish

### 1. Loyihani klonlash
```bash
git clone https://github.com/[username]/mini-marketplace
cd mini-marketplace
```

### 2. Paketlarni o'rnatish
```bash
npm install
```

### 3. Development serverini ishga tushirish
```bash
npm run dev
```

Brauzerda ochiladi: `http://localhost:5173`

### 4. Build qilish (production uchun)
```bash
npm run build
```

## 💡 Qiyin bo'lgan joylar
- Vanilla JS va React o'rtasida kommunikatsiya o'rnatish (CustomEvent ishlatish)
- localStorage bilan ishlash va ma'lumotlarni saqlash
- Miqdor funksiyasini to'g'ri amalga oshirish
- CSS Grid layout'ni responsive qilish
- State management (useState, useEffect)

## 📸 Interfeys skrinshotlari

### Desktop versiya
![Desktop Screenshot](screenshots/desktop.png)
*Mahsulotlar va savat - ikki ustunli layout*

### Mobil versiya
![Mobile Screenshot](screenshots/mobile.png)
*Mobil qurilmalar uchun - bloklar pastma-past*

## 🌐 Demo havolasi
[Agar Vercel, Netlify yoki GitHub Pages'ga deploy qilgan bo'lsangiz, havolani bu yerga qo'shing]

Misol: `https://mini-marketplace.vercel.app`

## 📝 Talablar bajarilishi

### ✅ Verstalash (HTML + CSS)
- [x] Desktop: ikki ustunli layout (Products + Cart)
- [x] Mobil: bloklar pastma-past
- [x] Hover/Active holatlar
- [x] Flex/Grid ishlatilgan
- [x] UI-kutubxonalarsiz (Bootstrap, Tailwind yo'q)
- [x] normalize.css ishlatilgan

### ✅ Ma'lumotlarni olish (Vanilla JS)
- [x] FakeStore API'dan mahsulotlar yuklanadi
- [x] Mahsulot kartochkalari: foto, nom, narx, tugma
- [x] React ishlatilmagan (faqat mahsulotlar uchun)

### ✅ React funksionalligi
- [x] useState - holat boshqaruvi
- [x] useEffect - localStorage va event listeners
- [x] Komponentlarga bo'lingan (Cart, CartList, CartItem)
- [x] Mahsulot qo'shish/o'chirish
- [x] Miqdorni boshqarish (+ / -)
- [x] Soni va umumiy summani ko'rsatish

## 🔧 Muhim texnik qismlar

### Vanilla JS va React kommunikatsiyasi
```javascript
// products.js (Vanilla JS)
const event = new CustomEvent('addToCart', { detail: product });
window.dispatchEvent(event);

// Cart.jsx (React)
useEffect(() => {
  window.addEventListener('addToCart', handleAddToCart);
  return () => window.removeEventListener('addToCart', handleAddToCart);
}, []);
```

### localStorage integratsiyasi
```javascript
// Save
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems]);

// Load
useEffect(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) setCartItems(JSON.parse(savedCart));
}, []);
```

### Miqdor boshqaruvi
```javascript
const handleUpdateQuantity = (productId, newQuantity) => {
  if (newQuantity <= 0) {
    handleRemoveItem(productId);
  } else {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }
};
```

## 📞 Kontakt
[Bu yerga kontakt ma'lumotlaringizni kiriting]
- Email: ibrohimdavronov286.@gmailcom
- GitHub: https://github.com/ibrohim-davronov1


---
Made with ❤️ for Frontend Intern position 
