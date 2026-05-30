import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  return (
    <section className="section page-header">
      <div className="container">
        <header className="page-header__intro">
          <h1 className="page-header__title">Products</h1>
          <p className="page-header__lead">
            Practical, custom-made items for bikes, workshops, vehicles, and
            outdoor setups. Enquire for sizing, colours, or bespoke variations.
          </p>
        </header>

        {/* Grid reads from src/data/products.js — add entries there to grow the catalogue */}
        <div className="product-grid product-grid--catalog">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
