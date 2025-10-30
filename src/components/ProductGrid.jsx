import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ products, onAdd }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Featured Products</h2>
        <p className="mt-1 text-slate-600">Browse our curated selection of best-sellers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
