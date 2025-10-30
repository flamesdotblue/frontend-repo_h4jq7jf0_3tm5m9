import React from 'react';
import { Minus, Plus, Trash2, X } from 'lucide-react';

function Cart({ items, onClose, onIncrease, onDecrease, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const shipping = items.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-30">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h3 className="text-lg font-semibold text-slate-900">Your Cart</h3>
          <button onClick={onClose} className="rounded-md p-2 hover:bg-slate-100" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-slate-600">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 rounded-xl border border-slate-200 p-3">
                <img src={item.image} alt={item.title} className="h-20 w-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900 line-clamp-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 line-clamp-2">{item.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-lg border border-slate-300">
                      <button onClick={() => onDecrease(item.id)} className="p-2 hover:bg-slate-100" aria-label="Decrease quantity">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => onIncrease(item.id)} className="p-2 hover:bg-slate-100" aria-label="Increase quantity">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                      <button onClick={() => onRemove(item.id)} className="rounded-md p-2 text-red-600 hover:bg-red-50" aria-label="Remove item">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t border-slate-200 p-5 space-y-2">
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-base font-semibold text-slate-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="mt-3 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
