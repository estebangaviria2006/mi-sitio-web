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
