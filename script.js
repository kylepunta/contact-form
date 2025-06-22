const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  ".text-field > input:not(.email > input), textarea"
);
const email = document.querySelector(".email > input");
const radios = document.querySelectorAll("input[type='radio']");
const checkbox = document.querySelector(".check-field input");
const textErrorMessages = document.querySelectorAll(".error-message.text");
const emailErrorMessage = document.querySelector(".error-message.email");
const radioErrorMessage = document.querySelector(".error-message.radio");
const checkboxErrorMessage = document.querySelector(".error-message.checkbox");

form.addEventListener("submit", (event) => {
  form.classList.add("submitted");
  if (form.checkValidity()) {
    // form is valid
  } else {
    // form is invalid
    event.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].validity.valueMissing) {
        textErrorMessages[i].textContent = "This field is required";
      }
    }
    if (email.validity.valueMissing || email.validity.typeMismatch) {
      emailErrorMessage.textContent = "Please enter a valid email address";
    }
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].validity.valueMissing) {
        radioErrorMessage.textContent = "Please select a query type";
      }
    }
    if (checkbox.validity.valueMissing) {
      checkboxErrorMessage.textContent =
        "To submit this form, please consent to being contacted.";
    }
  }
});

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", () => {
    if (form.classList.contains("submitted")) {
      if (inputs[i].checkValidity()) {
        textErrorMessages[i].textContent = "";
      } else {
        textErrorMessages[i].textContent = "This field is required";
      }
    }
  });
}

email.addEventListener("input", () => {
  if (form.classList.contains("submitted")) {
    if (email.checkValidity()) {
      emailErrorMessage.textContent = "";
    } else {
      emailErrorMessage.textContent = "Please enter a valid email address";
    }
  }
});

radios.forEach((radio) => {
  radio.addEventListener("input", () => {
    if (radio.checkValidity()) {
      radioErrorMessage.textContent = "";
    }
  });
});

checkbox.addEventListener("input", () => {
  if (checkbox.checkValidity()) {
    checkboxErrorMessage.textContent = "";
  }
});
