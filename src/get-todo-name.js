// This purely extracts and processes the data from new todo form.

// need to get the return function to return an array due to adding in more values
// return can only return one value but can do arrays
// dropdown is going to use dropdown.value i believe to pull info


function getTodoName(formElement) {
    const formData = new FormData(formElement);
    return formData.get("title");
    formData.get("description");
    formData.get("due-date");
    //dropdown value goes here
}

export {getTodoName}