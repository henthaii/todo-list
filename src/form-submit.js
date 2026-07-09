// This will be the eventlistener for the submit button in the New Project form.

const form = querySelector("form");

form.addEventListener("submit",(event) => {
    event.preventDefault();
    console.log("New Project form submitted.")
})