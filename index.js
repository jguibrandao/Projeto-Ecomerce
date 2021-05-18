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

function verificaEstado() {
    var tem = false
    for(var i = 0; i < itens.length; i++) {
        if(itens[i].quantidade > 0) {
            tem = true;
            break
        }
    }
    if(tem == false) {
        var containerCarrinho = document.getElementById("carrinho");
        containerCarrinho.innerHTML = `<h3 class="estado-carrinho">Carrinho vazio</h3>`;
    }
}

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
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = `<h3 class="estado-carrinho">Carrinho vazio</h3>`;
    document.getElementById("genero-link1").style.fontStyle = "italic";
    document.getElementById("genero-link1").style.color = "red";
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
        verificaEstado();
    });
}

removerDoCarrinho = function(id) {
    for(var i = 0; i < itens.length; i++) {
        if (itens[i].id == id) {
            itens[i].quantidade -= 1;
            atualizarCarrinho();
            verificaEstado();
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
                quantidade: itens[0].quantidade
            },
            {
                id: 1,
                nome: "Short",
                img: "imgs/bermuda.jpg",
                quantidade: itens[1].quantidade
            },
            {
                id: 2,
                nome: "Tênis",
                img: "imgs/tenis.jpg",
                quantidade: itens[2].quantidade
            },
        ]
        document.getElementById("genero-link1").style.fontStyle = "italic";
        document.getElementById("genero-link1").style.color = "red";
        document.getElementById("genero-link2").style.fontStyle = "normal";
        document.getElementById("genero-link2").style.color = "black";
        atualizarLoja();
        verificaEstado();
    }

mudarGeneroFeminino = function() {
     itens = [
        {
            id: 0,
            nome: "Calça",
            img: "imgs/calça-moletom.jpg",
            quantidade: itens[0].quantidade
        },
        {
            id: 1,
            nome: "Blusa",
            img: "imgs/blusa.jpg",
            quantidade: itens[1].quantidade
        },
        {
            id: 2,
            nome: "Tênis",
            img: "imgs/tenis-feminino.jpg",
            quantidade: itens[2].quantidade
        },
    ]
    document.getElementById("genero-link2").style.fontStyle = "italic";
    document.getElementById("genero-link2").style.color = "red";
    document.getElementById("genero-link1").style.fontStyle = "normal";
    document.getElementById("genero-link1").style.color = "black";
    atualizarLoja();
    verificaEstado();
}

function pagamentoBotao() {
    var tem = false
    for(var i = 0; i < itens.length; i++) {
        if(itens[i].quantidade > 0) {
            tem = true;
            break
        }
    }
    if(tem == false) {
        alert("Erro, você não tem itens no carrinho")
    } else {
        alert("Compra realizada");
        for(var i = 0; i < 3; i++) {
        itens[i].quantidade = 0;
        }
        var containerCarrinho = document.getElementById("carrinho");
        containerCarrinho.innerHTML = `<h3 class="estado-carrinho">Carrinho vazio</h3>`;
    }
}

//chamadas da função
document.getElementById("genero-link1").onclick = mudarGeneroMasculino;
document.getElementById("genero-link2").onclick = mudarGeneroFeminino;

document.getElementById("pagamento").onclick = pagamentoBotao;



