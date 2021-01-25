function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("ul.todos") ;

    function createTodo() {
        const li = document.createElement("li");
        const textSpan = document.createElement("spant");
        textSpan.classList.add("todo-text");
        const newTodo = input.value;
        textSpan.append(newTodo);

        const deleteBth = document.createElement("span");
        deleteBth.classList.add("todo-trash");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-trash-alt");
        deleteBth.appendChild(icon);

        ul.appendChild(li).append(textSpan, deleteBth);
        input.valu = "";
        listenDeleteTodo(deleteBth);
    }

    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
            createTodo();
        }
    });
    
    ul.addEventListener("click", onClickTodo);
}
document.addEventListener("DOMContentLoaded", onPageLoaded);
