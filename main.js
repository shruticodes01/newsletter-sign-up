"use strict";

const email = document.querySelector("#email");
const emailLabel = document.querySelector(".email__label");
const btnSubmit = document.querySelector("#submit-btn");
const span = document.querySelector("#error-text");
const btnDismiss = document.querySelector("#dismiss-btn");
const dimissBtn = document.querySelector(".dismiss__btn");
const replaceContainer = document.querySelector("#replace");
const updateDialogEmail = document.querySelector("#user-email");
const dialog = document.querySelector("#success-dialog");
dialog.returnValue = "email";

const replaceTimer = function () {
  replaceContainer.classList.add("hidden");
  dialog.classList.remove("hidden");
};

const dismissTimer = function () {
  dialog.classList.add("hidden");
  replaceContainer.classList.remove("hidden");
};

const isValidEmail = function (userInput) {
  //   const userInput = email.value;
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
  const validity =
    (userInput.length !== 0 || userInput !== null || userInput !== " ") &&
    emailRegExp.test(userInput);
  return validity;
};

const validationHandler = function () {
  //   const emailInput = isValidEmail();
  const isValid = isValidEmail(email.value);
  if (!isValid) {
    span.classList.remove("hidden");
    span.style.color = "hsl(4, 100%, 67%)";
  } else {
    span.classList.add("hidden");
    setTimeout(replaceTimer, 300);
    updateDialogEmail.href = "mailto:" + email.value;
    updateDialogEmail.innerHTML = email.value;
  }
};

const handleInput = () => {
  validationHandler();
};

const handleSubmit = (event) => {
  event.preventDefault();
  validationHandler();
};

email.addEventListener("change", handleInput);
btnSubmit.addEventListener("click", handleSubmit);
btnDismiss.addEventListener("click", function () {
  setTimeout(dismissTimer, 300);
});
