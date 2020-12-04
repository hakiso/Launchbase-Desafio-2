const modalOverlay = document.querySelector('.modal-overlay');// selecionado o modal-overlay
const cards = document.querySelectorAll('.card');// selecionando todos cards
const maximize = document.querySelector('.modal')// selecionando modal

for (let card of cards) { // pegando os card individualmente
    card.addEventListener("click", function () { // colocando a função indiviual ao clicar no card
        const id = card.getAttribute('id') // pegando o atributo no card ex: Id ="starter"
        window.location.href = `https://rocketseat.com.br/${id}`

    });
}