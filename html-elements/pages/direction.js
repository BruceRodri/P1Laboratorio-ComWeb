class MiDirection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        h2 {
            font-size: 3rem;
            color: black;
            margin-bottom: 10px;
            text-align: center;
            margin-top: 20px;
        }
        .contact-info {
            margin-top: 20px;
        }
        .contact-info p { 
            margin: 5px 0;
            margin-left: 20px;
        }
        .text-center {
            text-align: center;
            margin-top: 20px;
            font-size: 1.2rem;
            font-weight: bold;
        }
        img {
            margin-top: 20px;
            border-radius: 5px;
            display: block; /*PARA CENTRAR LA IMAGEN*/
            margin-left: auto;
            margin-right: auto;
        }        
      </style>
      <h2>Dirección</h2>
      <div class="contact-info">
        <p><strong>Dirección:</strong> Luz de América, Universidad de las Fuerzas Armadas ESPE</p>
        <p><strong>Teléfono:</strong> 0912368574</p>
        <p><strong>Email:</strong> blrodriguez4@espe.edu.ec</p>
        <div class="text-center">
            <p>Nos puedes encontrar aquí:</p>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_1TEjc60K68JOf3hlIG4uSID_zDfBKbY6Q&s" alt="Ubicación de la universidad" style="max-width: 100%; height: auto;">
      </div>
    `;
  }
}
customElements.define("mi-direction", MiDirection);
