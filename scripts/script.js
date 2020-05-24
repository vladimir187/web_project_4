const editButton = document.querySelector('.button__action-edit');
const closeButton = document.querySelector('.button__action-close');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');

const nameInput = form.querySelector('.modal__input_type_name');
const titleInput = form.querySelector('.modal__input_type_title');

const userName = document.querySelector('.profile__name');
const userTitle = document.querySelector('.profile__title');

const toggleModal = () => {
    modal.classList.toggle('.modal__visible');
}

editButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    userName.textContent = nameInput.value;
    userTitle.textContent = titleInput.value;
})

