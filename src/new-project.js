// This is the DOM for new projects. 

function newProject() {
    const project = document.createElement('div');
    const form = document.querySelector("form");
    // const formData = new FormData(form);
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
    `;
    return project;
}

export {newProject};