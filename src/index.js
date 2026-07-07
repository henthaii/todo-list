// import {projects} from "./projects.js" I don't think I need this one anymore
import {newProject} from "./new-project.js";
import {clickingNewTodo} from "./new-todo-button.js";

// projects();
const addProject = document.querySelector(".projects").addEventListener("click",newProject);