function pesquisar() {
    //Obtem a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa")

 let campoPesquisa = document.getElementById("campo-pesquisa").value
    campoPesquisa = campoPesquisa.toLowerCase()

 //Inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = "";    
let descricao = "";

//Itera sobre cada dados da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)

    ){

        // Cria um novo elemento HTML
        resultados += `
        <div class="item-resultado">
                <h2>
                     <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                     <p class="descricao-meta">${dado.descricao}</p>
                     <a href="${dado.link}" target="_blank">mais informações</a>
        </div>
    `;
    }
}

if (!resultados){
    resultados = "Nada foi encontrado"
}
section.innerHTML = resultados
}