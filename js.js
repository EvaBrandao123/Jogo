
const conteudo=document.querySelector(".conteudo")
let quants=document.querySelector("#nome")
let time=document.querySelector("#time");
let desconto=9;

let cont=0;
let loop;
let seg=0;
let perd=0;
let acertou=0;


//MATRIZ com os nomes das imagens 

const imgCartas=[
    'jj.png',
     'def.png',
     'bvd.png',
     'tt.png',
     'bv.png',
     'bb.png',
];





// 1111 funcao para criar as cartas................
function criarCarta(Nomeimg){
    const carta=document.createElement("div")
    const frente=document.createElement("div")
    const atras=document.createElement("div")
    
    //aqui adicina class que estão no css no obj html
    carta.className="cartas";
    frente.className="face frente"
    atras.className="face atras";
    
    //a line abaixo pega o nome da imagem que esta npo arrey de nomes da imagem...
    frente.style.backgroundImage=`url(${Nomeimg}.png)`;
    
    //as line abaixo criam o front e back da imagem
    carta.appendChild(frente)
    carta.appendChild(atras)
    
    //cria um evento CLICK para imagem. com a funcao virar carta la abaixo||..
    carta.addEventListener("click",virarCarta);
    //atribui um atributo para carta com """"data""""" do HTML
    carta.setAttribute("data-character",Nomeimg)
    
    //faz o retorno da imagem..
    return carta;
    }
    




//variaveis de verificacão 
let primeiraCarta=" "
let segundaCarta=" "


//funcao para virar a carta!!!!!!!!
function virarCarta({target}){

    //usei o target para incluir a class Virarcarta do css....... e retornala na funcao virar carta
  if(target.parentNode.className.includes("virarCarta"))return;
  
  //verificacao da variavel de decisao nop caso
  if(primeiraCarta==" "){
      target.parentNode.classList.add("virarCarta")
      primeiraCarta=target.parentNode;

  }
  //verificacao da segunda variavel de decisao nop caso
  else if(segundaCarta==" "){
    target.parentNode.classList.add("virarCarta")
    segundaCarta=target.parentNode;
  }
  //chama a funcao virar carta...
  verificarCarta();
}



function verificarCarta(){

    //da atributos a duas contantes para comparar se venseu...
    const pCaracter=primeiraCarta.getAttribute("data-character")
    const sCaracter=segundaCarta.getAttribute("data-character")

   //condisao que verifica se acertou as duas cartas!!!!!

    if(pCaracter==sCaracter){
    //aqui add nas primeiras class o atributo data carta 
    primeiraCarta.firstChild.classList.add("data-character")
    segundaCarta.firstChild.classList.add("data-character")

    //incremento comum para ver se acertou
     acertou=acertou+1;

     if(acertou==6){
        alert("voce venceu!")
        clearInterval(loop);
        location.reload();
     }

     //o cointrario-..
     perd=perd-1;
//condicao de revencao de erro
     if(perd==0)perd=0;  

     //reiniciacao das veriaveis de verificacao
      primeiraCarta=" "
      segundaCarta=" "
      //chamada da funcao vencer---
   

    }
    //o contrario0
    else{
     setTimeout(function(){
        //Remove a class virar CARTA
     primeiraCarta.classList.remove("virarCarta");
     segundaCarta.classList.remove("virarCarta");
         
     
        perd=perd+1
        //reiniciacao das variaveis de verificacao.....
         primeiraCarta=" "
         segundaCarta=" "

         //entenderam
      
        //serve para descontar nas tentativas.....
         desconto=desconto-1;
         quants.innerHTML="Tentativas: "+desconto.toString();
        if(desconto==2)quants.style.color="red"
         if(desconto==0){
             desconto=9;
             alert("Perdeste")
             clearInterval(loop);
             location.reload();
         }

//SE perdeu!!!!!!!!!
    if(perd==9){
       alert("Perdeste")
       clearInterval(loop);
    //Reinicia com um REFRESH
    location.reload();
    }

},500)
   
}}



//funcao que verica se venseu


    //Um contador comum para te mostra o tempo.......
    contar()
    function contar(){
        loop =setInterval(()=>{
        cont=parseInt(time.innerHTML)
        time.innerHTML=cont+1;

        localStorage.setItem("tempo",time.innerHTML)
      },1000)
    }
    
    

    function iniciar(){
        //useia aqui o vetor de nomes de imasgens;
            let imgDupicados=[...imgCartas,...imgCartas]
        //usamos aqui um sorte pra organizar o arrei só que de forma aliatoria
            let imgembaralhar=imgDupicados.sort(()=>Math.random()-0.5)
        
            //percorreo arrey de imagens embaralhadas com o FOREACH para criar 
            //as cartas dentro do jogo chamando a funcao
            //criar carta,............
        imgembaralhar.forEach((caracter)=>{
           const card=criarCarta(caracter);
           conteudo.appendChild(card)
        });
    }
        
        
        //inicia O JOGO NA BOA!! 
        iniciar();





