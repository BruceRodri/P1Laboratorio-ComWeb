class Miheader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
            header {
                background-color: #000;
                color: white;
                padding: 15px;
                text-align: center;
            }
            a {
                color: white;
                margin: 0 10px;
                text-decoration: none;
                font-weight: bold;
            }
            nav a:hover {
                text-decoration: underline;
            }
        </style>    

        <header>
            <h1>Aplicacion De Galería</h1>
            <nav>
                <a href="#/">Inicio</a>
                <a href="#/gallery">Galeria</a>
                <a href="#/direction">Dirección</a>
                <a href="#/about">Acerca de nosotros</a>
                <a href="#/contact">Contacto</a>
            </nav>
        </header>     
    `;
  }
}
customElements.define("mi-header", Miheader);
