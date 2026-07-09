// This is the DOM for new projects. 

// Need to figure out how to dynamically take the input from new project putting
// And add it as a heading context
// need to add submit button, soft cancel, and focused button to x out of box
// need to create formdata (see library.js)

function newProject() {
    const project = document.createElement('div');
    const form = document.querySelector("form");
    // const formData = new FormData(form);
    project.classList.add('project');
    project.innerHTML = `
        <dialog id="dialog">
            <form>
                <div class="label">
                    <label for="project-name">Project Name:</label>
                    <input type="text" name="project-name" id="project-name">
                </div>
                <button type="submit">Submit</button>
                <button type="cancel">Cancel</button>
            </form>
        </dialog>
        <h2>formData.get('project-name')</h2>
    `;
    return project;
}

export {newProject};