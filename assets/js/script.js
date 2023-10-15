// Menu funcional

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("mouseenter", () => {
    menu.style.left = "0";
});

menu.addEventListener("mouseleave", () => {
    menu.style.left = "-250px";
});

/*fazer o botão de imagem de pet funcionar*/

// Selecione os elementos HTML
const inputFoto = document.getElementById('inputFoto');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const imagemContainer = document.getElementById('imagemContainer');

// Adicione um evento de clique ao botão
botaoAdicionar.addEventListener('click', function () {
    // Simula um clique no input de arquivo
    inputFoto.click();
});

// Adicione um evento de alteração ao input de arquivo
inputFoto.addEventListener('change', function () {
    const imagem = inputFoto.files[0];

    if (imagem) {
        const urlImagem = URL.createObjectURL(imagem);
        const imgElemento = document.createElement('img');
        imgElemento.src = urlImagem;

        // Limpe o conteúdo anterior do container de imagem
        imagemContainer.innerHTML = '';

        // Adicione a imagem ao container
        imagemContainer.appendChild(imgElemento);
    }
});

//botâo de publicação

const pub= document.getElementById('pub');

pub.addEventListener('click', function(){
        alert("Publicação feita com sucesso!!!");
    if(input != this.innerText){
        alert("Não foi possível publicar confira os campos acima.")
    }
})

 //Pergunta frequentes

const faqBotao = document.getElementById('faqBotao');
const faqContent = document.getElementById('faqContent');

faqButton.addEventListener('click', () => {
    if (faqContent.style.display === 'none' || faqContent.style.display === '') {
        faqContent.style.display === 'block';
    } else {
        faqContent.style.display === 'none';
    }
});
