import {projects} from "./projects.js"
import {newProject} from "./new-project.js"

projects();
const addProject = document.querySelector(".projects").addEventListener("click",newProject);