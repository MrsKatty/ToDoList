function onPageLoaded() {
    const input = document.querySelector("input[type='text']"),
        ul = document.querySelector("ul.todos"),
        saveButton = document.querySelector("button.save"),
        clearButton = document.querySelector("button.clear"),
        showTipsButton = document.querySelector("button.showTips"),
        closeTipsButton = document.querySelector("a.closeTips"),
        overlay = document.querySelector("#overlay");

    function createTodo() {
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.classList.add("todo-text");
        const newTodo = input.value;
        textSpan.append(newTodo);

        const deleteBth = document.createElement("span");
        deleteBth.classList.add("todo-trash");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-trash-alt");
        deleteBth.appendChild(icon);

        ul.appendChild(li).append(textSpan, deleteBth);
        input.value = "";
        listenDeleteTodo(deleteBth);
    }

    function listenDeleteTodo(element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();

        });
    }

    function loadTodos() {
        const data = localStorage.getItem("todos");
        if (data) {
            ul.innerHTML = data;
        }
        const deleteButtons = document.querySelectorAll("span.todo-trash");
        for (const button of deleteButtons) {
            listenDeleteTodo(button);
        }
    }

    function onClickTodo(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createTodo();
        }
    });
    ul.addEventListener("click", onClickTodo);

    saveButton.addEventListener("click", () => {
        localStorage.setItem("todos", ul.innerHTML);
    });
    clearButton.addEventListener("click", () => {
        ul.innerHTML = "";
        localStorage.removeItem('todos', ul.innerHTML);
    });
    showTipsButton.addEventListener("click", () => {
        overlay.style.display = "block";
    });
    closeTipsButton.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    loadTodos();
}


document.addEventListener("DOMContentLoaded", onPageLoaded);

