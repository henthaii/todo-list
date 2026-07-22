// This purely extracts and processes the data from new todo form.

// need to get the return function to return an array due to adding in more values
// return can only return one value but can do arrays
// need to figure out how to add to an array
// do i need to make a new function to create array holders
// for now, get class to work with this and append to end of whatever element is left

import {addTodoToProject} from "./addTodoToProject.js"

function getTodoName(formElement) {
    const formData = new FormData(formElement);
    // addTodoToProject(
        // return formData.get("title")
        // formData.get("description"),
        // formData.get("due-date"),
        return formData.get("priority")
    // );
};

export {getTodoName}