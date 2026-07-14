// This will be the eventlistener for the submit button in the New Project form.

import {getProjectName} from "./get-project-name.js"

function formSubmit(projectElement) {
    const form = projectElement.querySelector("#project-form");
    const heading = projectElement.querySelector('h2');
    const dialog = projectElement.querySelector('#dialog');
    const cancelButton = projectElement.querySelector('.cancel');
    const cancelXButton = projectElement.querySelector('.cancel-x');

    dialog.showModal();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        heading.textContent = getProjectName(form);
        dialog.close();
    });

    cancelButton.addEventListener('click', () => {
        dialog.close();
        projectElement.remove();
    });

    cancelXButton.addEventListener('click', () => {
        dialog.close();
        projectElement.remove();
    }); 
}

export {formSubmit}