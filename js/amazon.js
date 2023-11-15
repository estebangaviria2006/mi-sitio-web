document.addEventListener("DOMContentLoaded", function () {
    const imagenesMini = document.querySelectorAll(".contenedor .dia img");
    const imagenGrande = document.querySelector(".main-img-modal");
    const openCartButton = document.getElementById("openCart");
    const cartModal = document.getElementById("cartModal");
    const btnClose = document.getElementById("btnClose");

    imagenesMini.forEach((imagenMini) => {
        imagenMini.addEventListener("click", () => {
            // Cambiar la imagen grande a la seleccionada
            imagenGrande.src = imagenMini.src;
        });
    });

    openCartButton.addEventListener("click", () => {
        // Mostrar el carrito (modal)
        cartModal.classList.remove("lightbox-hidden");
    });

    btnClose.addEventListener("click", () => {
        // Cerrar el carrito (modal)
        cartModal.classList.add("lightbox-hidden");
    });
});






let mainImgModal111 = document.getElementById("mainImgModal111");

let mainImgModal11 = document.getElementById("mainImgModal11");
let mainImgModal22 = document.getElementById("mainImgModal22");
let mainImgModal33 = document.getElementById("mainImgModal33");
let mainImgModal44 = document.getElementById("mainImgModal44");
let mainImgModal55 = document.getElementById("mainImgModal55");

let boxMainImgModal11 = document.getElementById("boxMainImgModal11");
let boxMainImgModal22 = document.getElementById("boxMainImgModal22");
let boxMainImgModal33 = document.getElementById("boxMainImgModal33");
let boxMainImgModal44 = document.getElementById("boxMainImgModal44");
let boxMainImgModal55 = document.getElementById("boxMainImgModal55");


  mainImgModal111.addEventListener("click", function() {

    if (mainContent.style.display === "none") {
    mainContent.style.display = "block";
    }
  
  });

  const containerImg = document.querySelector('.principal-container-img');
  const imagenPrincipal = document.getElementById('mainImgModal111');
  const miniatura1 = document.querySelectorAll('.principal-article');
  
  containerImg.addEventListener('mouseover', (event) => {
    if (event.target && event.target.classList.contains('principal-article')) {
      const src = event.target.querySelector('.img-mini-principal').getAttribute('src');
      imagenPrincipal.setAttribute('src', src);

  
      miniaturas.forEach((miniatura) => {
        miniatura.style.border = '2px double rgb(214, 211, 211)'; // Restablecer el borde de todas las miniaturas
      });
  
      event.target.style.border = '2px solid lightblue'; // Cambiar el borde de la miniatura al pasar el cursor
    }
  });
  
  containerImg.style.cursor = 'pointer';
  
  miniatura1.forEach((miniatura) => {
    miniatura.addEventListener('mouseover', () => {
      miniatura.style.border = '2px solid lightblue'; // Cambiar el borde al pasar el cursor por la miniatura
    });
  
    miniatura.addEventListener('mouseout', () => {
      miniatura.style.border = '2x double rgb(214, 211, 211)'; // Restablecer el borde al salir del cursor
    });
  });