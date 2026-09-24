// Index file that will form the page.
import "./styles.css";
import {clickingNewProject} from "./project-controller.js";
import {clickingNewTodo} from "./todo-controller.js";

import { mainTodo } from "./todo-component.js";
import { renderAllTodos } from "./todo-DOM.js";


clickingNewProject();
clickingNewTodo();

// Re-render everything from storage on app boot up
function initializeApp() {
    // 1. Loop through all your saved project profiles
    mainProjects.forEach((project) => {
        // 2. Generate the project card DOM wrapper
        const projectCard = renderSavedProject(project.id, project.name);
        
        // 3. Populate that specific card container with its saved to-dos
        if (projectCard && mainTodo[project.id]) {
            renderAllTodos(projectCard, project.id);
        }
    });
}

// 4. Run the initial layout loader
initializeApp();