
//let semaforo = "amarelo"
//if (semaforo == "verde") {
//    alert("siga em frente!")
// else if (semaforo == "amarelo"){
//    alert("atenção")
//}else{
//    alert("espere!")
//}
var candidato1, candidato2, candidato3, candidato4
var voto = prompt('vote');
switch (voto) {
    case '1':
    candidato1++
    console.log('Você votou no candidato 1. Ele possui $(candidato1} votos');
    break;
    case '2':
    candidato2++
    console.log('Você votou no candidato 2. Ele possui ${candidato2} votos');
    break;
    case '3':
    candidato3++;
    console.log("Voce votou no candidato 3. Ele possui ${candidato3} votos");
    break;
    case '4':
    candidato4++;
    console. log('Voce votou no candidato 4. Ele possui ${candidato4} votos');
    case '5':
    votosEmBranco++
    console. log("Voce votou em branco");
    default:
    break;
} 
    while (voto <= 7) {
    let decisao = prompt('Gostaria de votar novamente (digite 6) ou sair (digite 7)');
    if (decisao == '6') {
    voto = prompt('Em quem voce gostaria de votar? \n 1-Candidatol \n 2-Candidato2 \n 3-Candidato3 \n 4-Candidato4 \n 5-Votar em Branco \n')
    break;
    } else (decisao == '7')
    break;
    
    voto++;
}
