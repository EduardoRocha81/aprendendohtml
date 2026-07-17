function mostrarSaudacao() {
    // Variável que recebe o idioma selecionado
    var idiomaSelecionado = document.getElementById("idioma").value;
    
    // Variável que guardará a mensagem de saudação
    var mensagemSaudacao = "";

    // Estrutura Switch-case para definir a saudação com base no idioma
    switch (idiomaSelecionado) {
        case "portugues":
            mensagemSaudacao = "Olá!";
            break;
        case "ingles":
            mensagemSaudacao = "Hello!";
            break;
        case "espanhol":
            mensagemSaudacao = "Hola!";
            break;
        default:
            mensagemSaudacao = "Por favor, selecione um idioma válido.";
    }

    document.getElementById("saudacao").innerText = mensagemSaudacao;
}
