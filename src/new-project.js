// This is specifically for new projects. 

// Need to figure out how to dynamically take the input from new project putting
// And add it as a heading context

function newProject() {
    const projectContainer = document.querySelector(".container");
    const project = document.createElement('div');
    projectContainer.classList.add('project');
    project.innerHTML = `
        <h2>New Project</h2> 
    `;
    projectContainer.appendChild(project);
    return projectContainer;
}

export {newProject};