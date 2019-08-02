//let botao = document.querySelector("button");

//function abrirAlert2(){
   // alert("sou segundo alert");
//alert("boa tarde");
//}

//botao.onclick = abrirAlert2;

//function abrirAlert(nome){
  //  alert(nome);
//}

//function receberNome(callbacknome){
   // let nome = "lucas"
    //callbacknome(nome);
//}   
//receberNome(abrirAlert);

let lista = document.querySelector("ol");
let corpo = document.querySelector("body");

let raizes = [
    {nome: "Batata"},
    {nome: "Mandioca"},
    {nome: "Rabanete"}
];

let imprimirComidas = (qualquerNOmeAI) =>{
    for(let raiz of raizes){
        lista.innerHTML += `<li>${raiz.nome}</li>`
    }
    corpo.style.backgroundColor = qualquerNOmeAI;
}


let adicionarComida = (callback) =>{
    let escolheCor = prompt("Digite uma cor em ingles");
    setTimeout(() => {
        raizes.push({nome: "Gengibre"});
        callback(escolheCor);
    }, 2000);
}

adicionarComida(imprimirComidas); 

 
let diaSemana = "semana";

let batatinhaFritaDoMc = (resolve, reject) =>{
    if(diaSemana == "sextou"){
        resolve("Acertoouuuu");
    }
    else{
        reject("Errou");
    }
}

let promessa = new Promisse(batatatinhaFritaDoMc)

promessa
    .then(console.log)
    .cath(console.error)