let contador = 0
let input = document.getElementById("inputTarefa")
let btnAdd = document.getElementById("btn-add")
let areaLista = document.getElementById("area-lista")

function addTarefa() {

    //pegar o valor do input
    let valorInput = input.value

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador

        let novoItem = ` <div id="${contador}" class="item">
        <div class="item-icone" onclick="marcarTarefa(${contador})">
        <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>


        <div class="item-nome" onclick="marcarTarefa(${contador})">
            ${valorInput}
        </div>


        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})">
            <i class="mdi mdi-delete"></i>
            </button>
        </div>
    </div>`

        //adicionar novo item na area de lista
        areaLista.innerHTML += novoItem

        //zerar os campos
        input.value = ""
        input.focus()
    }
}

function deletar(contador) {
    var tarefa = document.getElementById(contador)
    tarefa.remove()
}

function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')

    if (classe == "item") {
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

        item.parentNode.appendChild(item)

    } else {
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')
    }
}


input.addEventListener("keyup", function (event) {
    //se teclou (13)
    if (event.keyCode === 13) {
        btnAdd.click()
    } {

    }
})