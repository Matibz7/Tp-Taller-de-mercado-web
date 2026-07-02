/*modo oscuro/claro*/
document.addEventListener("DOMContentLoaded", function () {
    // Capturamos el botón del DOM mediante su ID único
    const btnTheme = document.getElementById("btn-theme");
    const cuerpoPagina = document.body;

    if (btnTheme) {
        btnTheme.addEventListener("click", function () {
            // .toggle agrega la clase si no está, o la saca si ya existe
            cuerpoPagina.classList.toggle("dark-mode");

            // Validamos si la página quedó en modo oscuro para cambiar el texto del botón
            if (cuerpoPagina.classList.contains("dark-mode")) {
                btnTheme.textContent = " Modo Claro";
                // Opcional: Cambiamos las clases de Bootstrap del botón sobre la marcha
                btnTheme.classList.replace("btn-outline-dark", "btn-outline-light");
            } else {
                btnTheme.textContent = " Modo Oscuro";
                btnTheme.classList.replace("btn-outline-light", "btn-outline-dark");
            }
        });
    }
});