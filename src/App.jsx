import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const demoProducts = [
  {
    id: 'p-1',
    title: 'Wireless Noise-Canceling Headphones',
    description: 'Immersive sound, 30h battery, quick charge, and plush comfort for all-day listening.',
    price: 199.99,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1518441902110-2387a4be4f4b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-2',
    title: 'Smartwatch Series X',
    description: 'Track fitness, heart rate, sleep, and get notifications with a crisp AMOLED display.',
    price: 149.0,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-3',
    title: 'Ergonomic Office Chair',
    description: 'Adjustable lumbar support, breathable mesh, and smooth-rolling casters for comfort.',
    price: 259.99,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1582582429416-2b9df4d6f3fb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-4',
    title: 'Mechanical Keyboard (RGB)',
    description: 'Hot-swappable switches, PBT keycaps, and per-key RGB for a satisfying typing experience.',
    price: 89.99,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-5',
    title: '4K Ultra HD Monitor 27"',
    description: 'Crisp 4K resolution with HDR support and thin bezels for immersive productivity.',
    price: 329.99,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-6',
    title: 'Portable Bluetooth Speaker',
    description: 'Powerful bass, water-resistant design, and 12h playtime for music on the go.',
    price: 59.99,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-7',
    title: 'Action Camera 4K',
    description: 'Vivid 4K60 video, stabilization, and rugged waterproof housing for adventures.',
    price: 239.99,
    rating: 4.1,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-8',
    title: 'Wireless Charger Stand',
    description: 'Fast charging for phones and earbuds with an angled stand to keep notifications visible.',
    price: 29.99,
    rating: 4.0,
    image:
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop',
  },
];

function App() {
  const [products] = useState(demoProducts);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)));
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const startCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const confirmOrder = () => {
    setCheckoutOpen(false);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-rose-500 p-[1px]">
          <div className="rounded-2xl bg-white p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Discover your next favorite</h2>
                <p className="mt-1 text-slate-600">Quality tech products curated for everyday life.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="hidden sm:inline">Free shipping over $100</span>
                <span className="hidden sm:inline">•</span>
                <span>30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid products={products} onAdd={handleAddToCart} />

      {cartOpen && (
        <Cart
          items={cart}
          onClose={() => setCartOpen(false)}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeItem}
          onCheckout={startCheckout}
        />
      )}

      {checkoutOpen && (
        <Checkout items={cart} onClose={() => setCheckoutOpen(false)} onConfirm={confirmOrder} />
      )}

      <footer className="mt-12 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500">
          <p>
            Built with care. Prices and products are for demo purposes. No payment is collected.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
