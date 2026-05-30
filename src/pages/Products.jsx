import ComingSoon from '../components/ComingSoon';

export default function Products() {
  return (
    <section className="section products-page">
      <div className="container products-page__inner">
        {/* When catalogue launches: map products from src/data/products.js */}
        <ComingSoon />
      </div>
    </section>
  );
}
