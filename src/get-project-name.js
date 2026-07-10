// This purely extracts and processes the data from new project form.

function getProjectName(formElement) {
    const formData = new FormData(formElement);
    return formData.get("project-name");
}

export {getProjectName}