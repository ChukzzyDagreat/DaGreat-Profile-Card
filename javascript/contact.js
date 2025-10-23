// js/contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const fields = {
    fullName: document.getElementById("fullName"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };
  const errors = {
    fullName: document.getElementById("error-fullName"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };
  const success = document.getElementById("formSuccess");
  const sender = document.getElementById("senderName");

  function resetErrors() {
    Object.values(errors).forEach((el) => {
      el.textContent = "";
      el.hidden = true;
    });
    success.hidden = true;
  }

  function validateEmail(value) {
    // simple email regex (reasonable for client-side)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validate() {
    let valid = true;
    resetErrors();

    if (!fields.fullName.value.trim()) {
      errors.fullName.textContent = "Full name is required.";
      errors.fullName.hidden = false;
      valid = false;
    }

    if (!fields.email.value.trim()) {
      errors.email.textContent = "Email is required.";
      errors.email.hidden = false;
      valid = false;
    } else if (!validateEmail(fields.email.value.trim())) {
      errors.email.textContent =
        "Please enter a valid email (name@example.com).";
      errors.email.hidden = false;
      valid = false;
    }

    if (!fields.subject.value.trim()) {
      errors.subject.textContent = "Subject is required.";
      errors.subject.hidden = false;
      valid = false;
    }

    if (!fields.message.value.trim()) {
      errors.message.textContent = "Message is required.";
      errors.message.hidden = false;
      valid = false;
    } else if (fields.message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      errors.message.hidden = false;
      valid = false;
    }

    return valid;
  }

  // show errors live on blur
  Object.values(fields).forEach((field) => {
    field.addEventListener("blur", () => {
      validate();
    });
  });

  // form submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate()) {
      // simulate successful submission
      success.hidden = false;
      // clear form for better UX
      form.reset();
      // move focus to success for screen reader users
      success.focus && success.focus();
      //sender name display
      sender.textContent.return(fullName);
    } else {
      // focus first invalid element
      const firstError = Object.keys(errors).find((k) => !errors[k].hidden);
      if (firstError) {
        fields[firstError].focus();
      }
    }
  });

  // ensure success container is focusable for accessibility when revealed
  success.tabIndex = -1;
  resetErrors();
});
const successOk = document.querySelector(".success_ok");
const success = document.getElementById("formSuccess");

successOk.addEventListener("click", () => {
  success.hidden = true;
});
