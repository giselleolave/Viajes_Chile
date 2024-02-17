const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );


  $(document).ready(function () {
    /*VARIABLES*/
    let btnEnviar = $("#enviar");
    let h5 = $("h5");
    let ocultarTexto = $(".card-text");


    /*FUNCIONES */
    btnEnviar.click(function () {
        alert("Su mensaje ha sido enviado");
    });
    h5.click(function () {
        ocultarTexto.toggle();
    });

  });