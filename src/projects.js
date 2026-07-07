// will host all todos that fall into a project 

// users should be able to create new projects and choose which project their todos go into

// this should be a DOM because projects just contain the todos

// file has to pull any new projects added to page

// This is the first project that users see when they open page, DOM setup.

// I'm thinking this project isn't even needed since i have a new-project button and 
// the default should be to have the "Main To-Do Items" already shown when user opens app

function projects() {
    const projectContainer = document.querySelector(".container");
    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `
        <h2>Main To-Do Items</h2>
    `;
    projectContainer.appendChild(project);
}

export {projects};