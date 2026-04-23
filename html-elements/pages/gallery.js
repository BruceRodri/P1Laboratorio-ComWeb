class GalleryImages extends HTMLElement {
  constructor() {
    super();
    //CREA UN ESPACIO PRIVADO PARA EL COMPONENTE
    this.attachShadow({ mode: "open" });
  }

  //SE EJECUTA CUANDO EL COMPONENTE SE AGREGA AL DOM
  connectedCallback() {
    const elements = [
      {
        src: "https://mewmagazine.es/wp-content/uploads/2020/05/Deadpool-736x400.jpg",
        title: "Deadpool",
        description: "Deadpool superheroe de Marvel",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-MAF-bE6J0p8Yqz5x7yl9i0Cv1YQHVlaHQ&s",
        title: "Gato",
        description: "Gato domestico",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFq49vUMi0WWydWJCKVWMPr8whuGhoFcj7w&s",
        title: "Perro",
        description: "Perro domestico",
      },
      {
        src: "https://alohacamp.com/es/travels/wp-content/uploads/2024/09/montanas-de-espana-ZW.webp",
        title: "Montañas",
        description: "Paisaje de montañas al amanecer",
      },
      {
        src: "https://mikeelectronica.com/cdn/shop/articles/B-MK_02_2121x.progressive.jpg?v=1607535378",
        title: "Tecnología",
        description: "Placa electrónica de computadora",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMmNrIRFTJaz4Q09YF5avI7Jy6cm_Tqi0ag&s",
        title: "León",
        description: "León en la sabana africana",
      },
      {
        src: "https://thumbs.dreamstime.com/b/calle-de-la-ciudad-nueva-york-por-noche-con-luces-ne%C3%B3n-y-reflejos-h%C3%BAmedos-una-vibrante-escena-callejera-en-iluminada-coloridos-389707693.jpg",
        title: "Ciudad",
        description: "Vista nocturna de una ciudad iluminada",
      },
      {
        src: "https://img.freepik.com/foto-gratis/paraiso-playa-tropical-palmeras-agua-turquesa_23-2151975534.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Playa",
        description: "Playa tropical con agua cristalina",
      },
    ];

    this.shadowRoot.innerHTML = `
        <style>
        //AFECTA A GALLERY IMAGES
            :host{
                display: block;
                padding: 20px;
            }

            .gallery{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 25px;
            }
        </style>


          <div class="gallery">
            ${elements
              .map(
                (element) => `
                <mi-card 
                src="${element.src}"
                title="${element.title}"
                description="${element.description}">
            </mi-card>
            `,
              )
              .join("")}
          </div>
        `;
  }
}
customElements.define("gallery-images", GalleryImages);
