// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
function validacaoEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}

$(document).on('input', '#inputEmail', function (e) {//keypress
    var input = $(this);
    var valor = input.val();

   
    if ( validacaoEmail(valor)) {
        input.css("border: 1px solid #ccc;")
    } else {
        input.css("border: 1px solid #red;")
    }
});