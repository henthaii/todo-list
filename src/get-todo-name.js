// This purely extracts and processes the data from new todo form.

function getTodoName(formElement) {
    const formData = new FormData(formElement);
    return formData.get("title");
}

export {getTodoName}