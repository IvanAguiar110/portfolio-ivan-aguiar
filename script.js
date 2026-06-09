let enviado = false;

let botao = document.getElementById("contato");

botao.addEventListener("click", mostrarMensagem);

function mostrarMensagem() {
    if (enviado === false) {
        botao.innerText = "Mensagem enviada!";
        enviado = true;
    } else {
        botao.innerText = "Entrar em contato";
        enviado = false;
    }
}

function destacarSecao(id) {
    let secao = document.getElementById(id);

    secao.classList.add("destaque");

    setTimeout(function() {
        secao.classList.remove("destaque");
    }, 650);
}
