// creating addeventlistener for making a new project

function newProject() {
    const projectContainer = document.querySelector(".container");
    projectContainer.classList.add('project');
    projectContainer.innerHTML = `
        <h2>new project</h2>
    `;
    projectContainer.appendChild("project");
    return projectContainer;
}

export {newProject};