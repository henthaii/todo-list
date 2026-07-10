// This will be the eventlistener for the submit button in the New Project form.

function formSubmit(projectElement) {
    const form = projectElement.querySelector("#project-form");
    const heading = projectElement.querySelector('h2');
    const dialog = projectElement.querySelector('#dialog');
    const cancelButton = projectElement.querySelector('.cancel');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Delegate data extraction and UI updates
        heading.textContent = getProjectNameFromForm(form);
        dialog.close();
    });

    cancelBtn.addEventListener('click', () => {
        dialog.close();
    });
}