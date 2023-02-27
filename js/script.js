const addNewTasks = () => {
  const form = document.querySelector(".js-form");
  const input = document.querySelector(".js-input");
  const list = document.querySelector(".js-list");
  const newButtons = document.querySelector(".js-newButtons");
  let hideCompletedButton;

  const hideCompleted = () => {
    const completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach((task) => {
      task.classList.add("hidden");
    });
    if (document.querySelectorAll(".completed.hidden").length > 0) {
      hideCompletedButton.textContent = "Pokaż ukończone";
    } else {
      hideCompletedButton.textContent = "Ukryj ukończone";
    }
  };

  const showCompleted = () => {
    const completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach((task) => {
      task.classList.remove("hidden");
    });
    hideCompletedButton.textContent = "Ukryj ukończone";
  };

  const render = () => {
    if (list.children.length > 0) {
      hideCompletedButton = document.createElement("button");
      hideCompletedButton.textContent = "Ukryj ukończone";
      hideCompletedButton.classList.add("hideCompletedButton");
      hideCompletedButton.addEventListener("click", () => {
        const completedTasks = document.querySelectorAll(".completed");
        if (hideCompletedButton.textContent === "Ukryj ukończone") {
          hideCompleted();
        } else {
          showCompleted();
        }
      });

      const markAllCompletedButton = document.createElement("button");
      markAllCompletedButton.textContent = "Ukończ wszystkie";
      markAllCompletedButton.classList.add("markAllCompletedButton");
      markAllCompletedButton.addEventListener("click", () => {
        const allTasks = document.querySelectorAll(".header__list--item");
        allTasks.forEach((task) => {
          task.classList.add("completed");
        });
        markAllCompletedButton.classList.add("blockedButton");
        render();
      });

      newButtons.innerHTML = "";
      newButtons.appendChild(hideCompletedButton);
      newButtons.appendChild(markAllCompletedButton);
    } else {
      newButtons.innerHTML = "";
    }
  };

  const deleteTask = (task) => {
    task.remove();
    render();
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = document.createElement("p");
    newTask.classList.add("header__list--item");
    newTask.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "";
    deleteButton.classList.add("header__list-button");
    deleteButton.addEventListener("click", () => {
      deleteTask(newTask);
    });

    newTask.appendChild(deleteButton);
    list.appendChild(newTask);

    input.value = "";

    newTask.addEventListener("click", () => {
      newTask.classList.toggle("completed");
      render();
    });

    newTask.setAttribute("title", "Kliknij, aby oznaczyć zadanie jako zakończone");

    render();
  });
};


addNewTasks();
