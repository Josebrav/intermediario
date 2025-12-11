import "./app.css";

function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      

      {/* HERO */}
      <header className="hero">
        <h1>Operaciones Seguras, Sin Riesgos</h1>
        <p>
          Te ofrezco un servicio profesional de intermediación para compras,
          ventas y transferencias digitales. Confianza, transparencia y soporte
          personalizado 24/7.
        </p>
        <a
          className="hero-btn"
          href="https://wa.me/5492996262455?text=Hola! Quiero operar con intermediario."
          target="_blank"
        >
          Contactar por WhatsApp
        </a>
      </header>

      {/* FEATURES */}
      <section className="features">
        <h2>¿Por qué elegirme?</h2>
        <div className="cards">
          <div className="card">
            <h3>🔒 Seguridad Total</h3>
            <p>
              Evitá estafas: resguardo el dinero o la cuenta hasta que ambas
              partes cumplan.
            </p>
          </div>

          <div className="card">
            <h3>🤝 Confianza Garantizada</h3>
            <p>
              Proceso transparente y seguimiento completo hasta finalizar la
              operación.
            </p>
          </div>

          <div className="card">
            <h3>⚡ Atención Rápida</h3>
            <p>
              Disponibilidad inmediata y comunicación directa por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="testimonial">
        <blockquote>
          “Servicio excelente, rápido y confiable. Lo uso siempre para compras
          importantes.”
        </blockquote>
        <p className="author">— Cliente verificado</p>
      </section>

      {/* REDES */}
      <footer className="footer">
        <h3>Mis Redes</h3>
        <div className="social-links">
          <a href="https://instagram.com/tuusuario" target="_blank">
            Instagram
          </a>
          <a href="https://facebook.com/tuusuario" target="_blank">
            Facebook
          </a>
          <a href="https://tiktok.com/@tuusuario" target="_blank">
            TikTok
          </a>
        </div>
        <p className="copy">© 2025 Intermediario Seguro — Todos los derechos reservados. </p>
      </footer>
    </div>
  );
}

export default App;