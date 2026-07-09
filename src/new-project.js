// This is the DOM for new projects. 

// Need to figure out how to dynamically take the input from new project putting
// And add it as a heading context
// 

function newProject() {
    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `
        <dialog id="dialog">
            <form>
                <div class="label">
                    <label for="project-name">Project Name:</label>
                    <input type="text" name="project-name" id="project-name">
                </div>
                <button id="cancel">Cancel</button>
            </form>
        </dialog>
        <h2>New Project here (need to pull data from form)</h2>
    `;
    return project;
}

export {newProject};