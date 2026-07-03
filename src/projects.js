// will host all todos that fall into a project 

// users should be able to create new projects and choose which project their todos go into

// this should be a DOM because projects just contain the todos

function projects() {
    projectContainer = document.querySelector("container")
    projectContainer.innerHTML = `
        <p>test</p>`;
}

export {projects};