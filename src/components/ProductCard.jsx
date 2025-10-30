import React from 'react';
import { Plus, Star } from 'lucide-react';

function ProductCard({ product, onAdd }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <h3 className="text-slate-900 font-medium line-clamp-2">{product.title}</h3>
          <p className="mt-1 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-amber-500' : 'fill-transparent'} stroke-amber-500`} />
            ))}
          </div>
          <span className="text-lg font-semibold text-slate-900">${product.price.toFixed(2)}</span>
        </div>
        <button
          onClick={() => onAdd(product)}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <Plus className="h-4 w-4" /> Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
