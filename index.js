const itens = [
    {
        id: 0,
        nome: "Camiseta",
        img: "imgs/camisetas.jpg",
        quantidade: 0
    },
    {
        id: 1,
        nome: "Short",
        img: "imgs/bermuda.jpg",
        quantidade: 0
    },
    {
        id: 2,
        nome: "Tênis",
        img: "imgs/tenis.jpg",
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
    verificaQuantidade();
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
    verificaQuantidade();
}


function verificaQuantidade() {
    var tem;
    var estadoCarrinho = document.getElementsByClassName("estado-carrinho");
    for(var i = 0; i < itens.length; i++) {
        if(itens[i].quantidade <= 0) {
            tem = false;
        } else {tem = true}
    }

    if(tem == false) {
        estadoCarrinho.innerHTML = `<p>Seu carrinho está vazio<p>`;
    }
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