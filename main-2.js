let saldoDeVitorias = calculadoraDeVitorias(106,5);
let caso = calculadoraDePartidas(saldoDeVitorias);
let nivel = calculadoraDeNivel(caso);
console.log("O Herói tem saldo de " + saldoDeVitorias + " está no nível " + nivel);


function calculadoraDeVitorias(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas;
    return saldoDeVitorias;
} 

function calculadoraDePartidas(saldoDeVitorias) {
    let caso;
    if (saldoDeVitorias < 10) {
        caso = 1;
    } else if (saldoDeVitorias > 10 && saldoDeVitorias <= 20) {
        caso = 2;
    } else if (saldoDeVitorias > 20 && saldoDeVitorias <= 50) {
        caso = 3;
    } else if (saldoDeVitorias > 50 && saldoDeVitorias <= 80) {
        caso = 4;
    } else if (saldoDeVitorias > 80 && saldoDeVitorias <= 90) {
        caso = 5;
    } else if (saldoDeVitorias > 90 && saldoDeVitorias <= 100) {
        caso = 6;
    } else {
        caso = 7;
    }
    return caso;
}

function calculadoraDeNivel(caso) { 
    let nivel;
    switch(caso) {
        case 1:
            nivel = "Ferro";
            break;

        case 2:
            nivel = "Bronze";
            break;
    
        case 3:
            nivel = "Prata";
            break;
    
        case 4:
            nivel = "Ouro";
            break;
    
        case 5:
            nivel = "Diamante";
            break;
    
        case 6:
            nivel = "Lendário";
            break;
    
        case 7:
            nivel = "Imortal";
            break;

    }
    return nivel;
}