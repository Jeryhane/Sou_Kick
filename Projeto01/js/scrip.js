function validacaoEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}

$(document).on('click', '#btnEmail', function (e) {
    var btn = $(this);
    var input = $("#inputEmail");
    var valor = input.val();

   
    if (validacaoEmail(valor)) {
        input.css("border", "2px solid green");
        alert("Enviado!");
        input.val("");
        //swal('Boa!', 'Deu tudo certo!', 'success');
        } else {
        input.css("border", "2px solid red");
        input.focus();

    }
});