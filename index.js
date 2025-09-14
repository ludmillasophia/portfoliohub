 const form = document.getElementById("formContato");
    const msgSucesso = document.getElementById("msgSucesso");

    form.addEventListener("submit", function(e){
      e.preventDefault();
      msgSucesso.style.display = "block";
      form.reset();
      setTimeout(() => msgSucesso.style.display = "none", 4000);
    });