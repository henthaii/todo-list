// will host all todos that fall into a project 

// users should be able to create new projects and choose which project their todos go into

// this should be a DOM because projects just contain the todos

// file has to pull any new projects added to page

// need to add initial project

function projects() {
    const projectContainer = document.querySelector(".container");
    projectContainer.classList.add('project');
    projectContainer.innerHTML = `
        <h2>Main To-Do Items</h2>
    `;
    return projectContainer;
}

export {projects};