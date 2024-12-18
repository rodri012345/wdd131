document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("join-form");
    const successMessage = document.getElementById("success-message");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");

    nameInput.addEventListener("input", () => {
        nameError.textContent = nameInput.value.trim() === "" ? "Name is required." : "";
    });

    emailInput.addEventListener("input", () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailError.textContent = !emailPattern.test(emailInput.value) ? "Enter a valid email." : "";
    });

    phoneInput.addEventListener("input", () => {
        const phonePattern = /^\d{10}$/;
        phoneError.textContent = !phonePattern.test(phoneInput.value) ? "Enter a 10-digit phone number." : "";
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (nameInput.value.trim() && emailInput.value && phoneInput.value) {
            successMessage.classList.remove("hidden");
            form.reset();
        } else {
            alert("Please fill in all fields correctly.");
        }
    });
});
