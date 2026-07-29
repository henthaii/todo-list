// This will manage the visual structure (DOM)
// And data extraction


// DOM handler
function newProject() {
    const project = document.createElement('div');
    project.classList.add('project-card');
    project.innerHTML = `
        <dialog id="dialog">
            <form id="project-form">
                <button type="button" class="cancel-x">x</button>
                <div class="label">
                    <label for="project-name">Project Name:</label>
                    <input type="text" name="project-name" id="project-name">
                </div>
                <button type="submit">Submit</button>
                <button type="button" class="cancel">Cancel</button>
            </form>
        </dialog>
        <h2></h2>
        <button class="todo">New To-Do</button>
    `;
    return project;
}


// Form information handler/data extraction
function getProjectName(formElement) {
    const formData = new FormData(formElement);
    return formData.get("project-name");
}

export {newProject,getProjectName}