var itens = [
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

/*itens = [
    {
        id: 3,
        nome: "Calça",
        img: "imgs/calça-moletom.jpg",
        quantidade: 0
    },
    {
        id: 4,
        nome: "Blusa",
        img: "imgs/imgPlaceholder.png",
        quantidade: 0
    },
    {
        id: 5,
        nome: "Tênis",
        img: "imgs/imgPlaceholder.png",
        quantidade: 0
    },
]*/

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


function atualizarLoja() {
    var containerProdutos = document.getElementById("produtos");
    containerProdutos.innerHTML = "";
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

mudarGeneroMasculino = function() {
         itens = [
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
        document.getElementById("genero-link1").style.fontStyle = "italic";
        document.getElementById("genero-link1").style.color = "red";
        document.getElementById("genero-link2").style.fontStyle = "normal";
        document.getElementById("genero-link2").style.color = "black";
        atualizarLoja();
    }

mudarGeneroFeminino = function() {
     itens = [
        {
            id: 3,
            nome: "Calça",
            img: "imgs/calça-moletom.jpg",
            quantidade: 0
        },
        {
            id: 4,
            nome: "Blusa",
            img: "imgs/blusa.jpg",
            quantidade: 0
        },
        {
            id: 5,
            nome: "Tênis",
            img: "imgs/tenis-feminino.jpg",
            quantidade: 0
        },
    ]
    document.getElementById("genero-link2").style.fontStyle = "italic";
    document.getElementById("genero-link2").style.color = "red";
    document.getElementById("genero-link1").style.fontStyle = "normal";
    document.getElementById("genero-link1").style.color = "black";
    atualizarLoja();
}

document.getElementById("genero-link1").onclick = mudarGeneroMasculino;
document.getElementById("genero-link2").onclick = mudarGeneroFeminino;

