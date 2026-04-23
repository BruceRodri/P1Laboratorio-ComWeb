class MiHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* CONTENEDOR */
        .welcome-section {
          padding: 80px 20px;
          text-align: center;
          background-color: white;
          max-width: 800px;
          margin: 0 auto;
        }

        /* TITULO */
        h1 {
          font-size: 3rem;
          color: black;
          margin-bottom: 10px;
        }

        /* SUBTÍTULO */
        .subtitle {
          font-size: 1.5rem;
          color: #555555;
          font-weight: lighter;
        }

        /* LÍNEA NEGRA */
        .divider {
          width: 60px;
          height: 4px;
          background-color: black;
          margin: 0 auto 30px auto; /* CENTRA LINEA*/
        }

      </style>

      <section class="welcome-section">
        <h1>Bienvenido</h1>
        <div class="divider"></div>
        <p class="subtitle">A mi Galería</p>
      </section>
    `;
  }
}

customElements.define("mi-home", MiHome);
