const router = () => {
  //CREAR CONSTANTE QUE VA A SELECCIONAR ELEMENTO
  const app = document.getElementById("app");
  //CONSTANTE PARA SABER DONDE SE ENCUENTRA EL SITIO
  const path = window.location.hash;

  switch (path) {
    case "#/gallery":
      app.innerHTML = `<gallery-images></gallery-images>`;
      break;
    case "#/direction":
      app.innerHTML = `<mi-direction></mi-direction>`;
      break;
    case "#/about":
      app.innerHTML = `<mi-about></mi-about>`;
      break;
    case "#/contact":
      app.innerHTML = `<mi-contact></mi-contact>`;
      break;
    default:
      app.innerHTML = `<mi-home></mi-home>`;
      break;
  }
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
