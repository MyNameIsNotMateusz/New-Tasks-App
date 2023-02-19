const addNewTasks = () => {
  const form = document.querySelector(".js-form");
  const input = document.querySelector(".js-input");
  const list = document.querySelector(".js-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = document.createElement("p");
    newTask.classList.add("header__list--item");
    newTask.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "";
    deleteButton.classList.add("header__list-button");
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

    newTask.appendChild(deleteButton);
    list.appendChild(newTask);

    input.value = "";
    
    newTask.addEventListener("click", () => {
      newTask.classList.toggle("completed");
    });

    newTask.setAttribute("title", "Kliknij, aby oznaczyć zadanie jako zakończone");
  });
};

addNewTasks();