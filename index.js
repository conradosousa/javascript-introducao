// let mes = prompt("Digite o mês do seu nascimento(ex: jan):");
// let dia = prompt("Digite o dia do seu nascimento(ex: 1-31):");
// // alert(`mês ${mes} dia ${dia}`);


function descobrirNome(){
    let diaEscolhido = document.querySelector("#dia").value;
    let mesEscolhido = document.querySelector("#mes").value;

let escolhaMes = "";
let escolhaDia = "";
 

switch (mesEscolhido) {
    case "jan":
        escolhaMes = "Capirotos";
        break;
    case "fev":
        escolhaMes = "chupacabras";
        break;
    case "mar":
        escolhaMes = "eliotarios";
        break;
    case "abr":
        escolhaMes = "pingas";
        break;
    case "mai":
        escolhaMes = "jumentinos";
        break;
    case "jun":
        escolhaMes = "pipoqueiros";
        break;
    case "jul":
        escolhaMes = "sartuninos";
        break;
    case "ago":
        escolhaMes = "salamaleicos";
        break;
    case "set":
        escolhaMes = "soweto";
        break;

    case "out":
        escolhaMes = "abutres";
        break;
    case "nov":
        escolhaMes = "taxistas";
        break;
    case "dez":
        escolhaMes = "artpopular"
        break;

}

switch (diaEscolhido) {
    case "1":
        escolhaDia = "do papa";
        break;
    case "2":
        escolhaDia = "Do caca";
        break;
    case "3":
        escolhaDia = "Da guia";
        break;
    case "4":
        escolhaDia = "Do papoco";
        break;
    case "5":
        escolhaDia = "Do faro ";
        break;
    case "6":
        escolhaDia = "Do papai";
        break;
    case "7":
        escolhaDia = "Das chagas";
        break;
    case "8":
        escolhaDia = "Do bau";
        break;
    case "9":
        escolhaDia = "Dos faustos";
        break;
    case "10":
        escolhaDia = "De piupiu";
        break;
    case "11":
        escolhaDia = "Das almas";
        break;
    case "12":
        escolhaDia = "podres";
        break;
    case "13":
        escolhaDia = "da silva";
        break;
    case "14":
        escolhaDia = "tchutchuca";
        break;
    case "15":
        escolhaDia = "Do tempo";
        break;
    case "16":
        escolhaDia = "Do grilo";
        break;
    case "17":
        escolhaDia = "alexandre de morais";
        break;
    case "18":
        escolhaDia = "limões";
        break;
    case "19":
        escolhaDia = "nescal";
        break;
    case "20":
        escolhaDia = "Maloqueiros";
        break;
    case "21":
        escolhaDia = "pimpao";
        break;
    case "22":
        escolhaDia = "machupichu";
        break;
    case "23":
        escolhaDia = "samurai";
        break;
    case "24":
        escolhaDia = "fulos";
        break;
    case "25":
        escolhaDia = "mascara";
        break;
    case "26":
        escolhaDia = "zuados";
        break;
    case "27":
        escolhaDia = "Da ilha do dicaprio";
        break;
    case "28":
        escolhaDia = "Da praia";
        break;
    case "29":
        escolhaDia = "Rebel laion";
        break;
    case "30":
        escolhaDia = "psicodelicos";
        break;
    case "31":
        escolhaDia = "Do snaif";
        break;

        default:
            ""
}


// console.log("---------Nome de roqueiro!----------");
// alert(`Mês escolhido ${escolhaMes}, dia escolhido ${escolhaDia}`);
alert(`Seu nome é ${escolhaMes} ${escolhaDia}`);



    // alert(`dia: ${diaEscolhido}, mes: ${mesEscolhido}`);
}