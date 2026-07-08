// This is the DOM for new projects. 

// Need to figure out how to dynamically take the input from new project putting
// And add it as a heading context
// 

function newProject() {
    const projectContainer = document.querySelector(".container");
    const project = document.createElement('div');
    projectContainer.classList.add('project');
    project.innerHTML = `
        <dialog id="dialog">
            <form>
                <div class="label">
                    <label for="project-name">Project Name:</label>
                    <input type="text" name="project-name" id="project-name">
                </div>
            </form>
        </dialog>

        // <h2>New Project</h2> this is filler for now, needs to take into account the dialog
    `;
    projectContainer.appendChild(project);
    return projectContainer;
}

export {newProject};