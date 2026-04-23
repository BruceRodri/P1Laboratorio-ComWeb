class MiAbout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: white;
          padding: 20px;
          color: black;
        }
        h2 {
          font-size: 3rem;
          color: black;
          text-align: center;
          margin-top: 20px;
        }
        .about-content {
          max-width: 800px;
          margin: 40px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .section {
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
          border: 1px solid black;
        }
        .section:hover {
          transform: translateY(-5px);
        }
        .section h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: black;
        }
        .section p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
          color: black;
        }
        
      </style>
      <h2>Acerca de Nosotros</h2>
      <div class="about-content">
        <div class="section">
          <h3>Nuestra Galería</h3>
          <p>Explora nuestra galería interactiva, construida con componentes web. Puedes encontrar una colección de imágenes y elementos visuales que demuestran el poder de las tecnologías web</p>
        </div>
        <div class="section">
          <h3>Tecnología Utilizada</h3>
          <p>Esta página utiliza Web Components, Shadow DOM y CSS para crear una experiencia modular para el usuario. Cada sección es un componente reutilizable, facilitando el mantenimiento y la escalabilidad</p>
        </div>
      </div>
    `;
  }
}
customElements.define("mi-about", MiAbout);
