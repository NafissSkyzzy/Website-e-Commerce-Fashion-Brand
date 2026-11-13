import './App.css';
import products from "./products";



function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-image"
        onClick={() => onViewDetails(product)}
        aria-label={`Lihat detail ${product.name}`}
      >
        <img src={product.image} alt={product.name} />

        <span className="product-badge">
          {product.badge}
        </span>
      </button>

      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>

        <p className="product-price">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(product.price)}
        </p>
      </div>

      <button
        type="button"
        className="product-detail-button"
        onClick={() => onViewDetails(product)}
      >
        VIEW DETAILS <span aria-hidden="true"><svg
  viewBox="0 0 24 24"
  width="16"
  height="16"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M7 17 17 7" />
  <path d="M8 7h9v9" />
</svg></span>
      </button>
    </article>
  );
}



function App() {
  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand-logo">
          OFFRAY
        </a>

        <nav className="nav-links">
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="nav-search" aria-label="Search">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.3" />
              <path d="m16 16 4.2 4.2" />
            </svg>
            Search
          </button>
          <button type="button" className="nav-cart" aria-label="Shopping bag, 0 items">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 8H6" />
              <circle cx="9.5" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span className="nav-cart-count">0</span>
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">OFFRAY — NEW COLLECTION 2026</p>
          <h1 className="hero-title">
            <span className="textured-word">BEYOND</span>
            <span className="layered-word">THE ORDINARY.</span>
          </h1>
          <p className="hero-description">
            Discover your own expression through contemporary fashion.
          </p>
          <a href="#new-arrivals" className="hero-button">
            EXPLORE COLLECTION <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <span className="hero-graphic-index">01</span>
          <span className="hero-graphic-panel"></span>
          <span className="hero-graphic-outline"></span>
          <span className="hero-graphic-word">OFF<br />RAY</span>
          <span className="hero-graphic-stamp">INDIVIDUAL<br />BY DESIGN</span>
          <span className="hero-graphic-caption">FORM / FUNCTION / 2026</span>
        </div>
      </section>

      
<section id="new-arrivals" className="new-arrivals">
  <div className="section-heading">
    <div>
      <p className="section-eyebrow">01 / THE LATEST DROP</p>
      <h2>
        NEW ARRIVALS<span>.</span>
      </h2>
    </div>

    <a href="#collections" className="view-all">
      VIEW COLLECTION <span aria-hidden="true">↗</span>
    </a>
  </div>

  <div className="product-grid">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      onViewDetails={(selectedProduct) => {
        console.log("Produk dipilih:", selectedProduct);
      }}
    />
  ))}
</div>
</section>

      <section id="collections" className="section-placeholder">
        <p>02 — CURATED FOR YOU</p>
        <h2>Our Collections</h2>
      </section>

      <footer id="about" className="footer">
        <a href="/" className="brand-logo">
          OFFRAY
        </a>
        <p>Contemporary fashion. Individual expression.</p>
        <p>© 2026 OFFRAY. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
