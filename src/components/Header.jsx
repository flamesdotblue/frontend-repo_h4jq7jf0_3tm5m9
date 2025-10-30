import React from 'react';
import { ShoppingCart } from 'lucide-react';

function Header({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">Flames Shop</h1>
        </div>
        <button
          onClick={onCartClick}
          className="relative inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Open cart"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 min-w-[20px] rounded-full bg-indigo-600 px-1.5 text-xs font-semibold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
