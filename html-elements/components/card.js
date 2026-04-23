class MiCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const src = this.getAttribute("src");
        const title = this.getAttribute("title");
        const description = this.getAttribute("description");

        this.shadowRoot.innerHTML = `
            <style>
                .card{
                    background-color: #fff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .card:hover{
                    transform: translateY(-8px) scale(1);
                    box-shadow: 0 12px 25px  rgba(0, 0, 0, 0.35);
                }

                .card img{
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    display: block;
                }

                .card div{
                    padding: 15px;
                }
            </style>
            <div class="card">
                <img src="${src}">
                <div>
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }
}
customElements.define('mi-card', MiCard);
