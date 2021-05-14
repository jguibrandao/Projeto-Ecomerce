const itens = [
    {
        id: 0,
        nome: "Camiseta",
        img: "imgs/imgPlaceholder.png",
        quantidade: 0
    },
    {
        id: 1,
        nome: "Short",
        img: "imgs/imgPlaceholder.png",
        quantidade: 0
    },
    {
        id: 2,
        nome: "Sapato",
        img: "imgs/imgPlaceholder.png",
        quantidade: 0
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById("produtos");
    itens.map((val)=> {
        containerProdutos.innerHTML += `

        <div class="produto-single"> 
            <img src="${val.img}"/>
            <p class="nome-produto">${val.nome}</p>
            <a class="link-carrinho" key="${val.id}" href="#">Adicionar ao carrinho</a>
        </div>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = "";
    itens.map((val)=> {
        if(val.quantidade > 0) {
            containerCarrinho.innerHTML += `
            <p class="nome-produto">${val.nome} | Quantidade: ${val.quantidade} 
                <a class="link-remove" key="${val.id}" href="javascript:removerDoCarrinho(${val.id})">Remover item</a>
            </p>
            <hr>
            `;
        }
    })
}

var links = document.getElementsByClassName("link-carrinho");

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let key = this.getAttribute("key");
        itens[key].quantidade++;
        atualizarCarrinho();
    });
}

removerDoCarrinho = function(id) {
    for(var i = 0; i < itens.length; i++) {
        if (itens[i].id == id) {
            itens[i].quantidade -= 1;
            atualizarCarrinho();
        }
    }
}