import Modal from './modal.js'

const modal = Modal()

const deleteButtons = document.querySelectorAll('.actions a.delete')
const checkButtons = document.querySelectorAll('.actions a.check')

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick (event, false))
})

function handleClick (event, check = true){
    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    // abrir modal
    modal.open()
}


/*---------COPIAR------------*/
const copyBtn = document.querySelector('.buttons .copyBtn')
const roomId = document.querySelector("#room-id").dataset.id
console.log(roomId)

copyBtn.onclick = () => {
    let text = document.querySelector(".buttons .copyBtn").value;
    navigator.clipboard.writeText(text);
}