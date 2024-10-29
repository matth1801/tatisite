//Seleciona o container de imagens e conta o total de imagens no carrossel
const imagens=document.querySelector('.carousel-images');
const totalImages=images.querySelectorAll('img').length;
let currentIndex=0;//Índice da imagem atualmente exibida
//Adiciona um evento de clique ao botão “next” para ir a próxima imagem
document.querySelector('.next').addEventListener('click',()=>{
currentIndex=(currentIndex+1)%totalImages;
//Incrementa o índice e faz um ciclo

updateCarousel();//Atualiza a posição do carrossel
});
//Adiciona um evento de clique ao botão “prev” para ir para a imagem anterior
documen.querySelector('prev').addEventListner('click',()=>{
currentIndex=(currentIndex-1+totalImages)%totalImages;//Decrementa o índice e faz um
ciclo
updateCarousel();//Atualiza a posição do carrossel
});
//Função para atualizar a posição do carrossel com base no índice actual
function updateCarousel(){
const offset=-curremtIndex*100;//Calcula o deslocamento em pircentagem
images.style.transform='translateX(${offset}%)';
//Move o contêiner de imagens
}