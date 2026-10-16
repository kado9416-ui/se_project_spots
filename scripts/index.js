function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button",
);

const editProfileForm = editProfileModal.querySelector(".modal__form");

const editProfileNameInput = editProfileModal.querySelector("#name-input");
const editProfileDescriptionInput =
  editProfileModal.querySelector("#description-input");

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
  console.log(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  const newPostModal = document.querySelector("#new-post-modal");
  const addCardForm = newPostModal.querySelector(".modal__form");
  const linkInput = newPostModal.querySelector("#card-image-input");
  const captionInput = newPostModal.querySelector("#description-input");
  function handleAddCardSubmit(evt) {
    evt.preventDefault();
    console.log(linkInput.value, captionInput.value);
  }
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(event) {
  event.preventDefault();
  console.log("submit fired");
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

const newPostForm = newPostModal.querySelector(".modal__form");

newPostForm.addEventListener("submit", handleAddCardSubmit);

function handleAddCardSubmit(event) {
  event.preventDefault();
  console.log("submit fired");
  newPostImage.src = linkInput.value;
  newPostCaption.textContent = captionInput.value;
  closeModal(newPostModal);
}
