//Se utilizan los data atributes para dar una referencia mas concreta y evitar que con la refactorización del código se pierdan los atributos

//Immediately invoked function expression (IIFE)
(() => {
    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => {
        //Evita el refresco de la página que tienen los forms por default
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        //Agrega el estilo al li creado
        task.classList.add("card");
        input.value = '';
        //Creando div
        const taskContent = document.createElement("div");
        //Añade icono al div
        taskContent.appendChild(checkComplete());
        //Creando span
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        //Añadiendo todo a la tarjeta
        taskContent.appendChild(titleTask);
        const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

        //task.innerHTML = content;
        task.appendChild(taskContent);
        //Union de padre e hijo para agregar las cards de manera dinamica
        list.appendChild(task);
    }

    //Se reciben 2 parámetros, el tipo de evento que se quiere escuchar y la acción a realizar
    btn.addEventListener("click", createTask);

    //Creación Icono
    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far", "fa-check-square", "icon");
        i.addEventListener("click", completeTask);
        return i;
    }


    const completeTask = (event) => {
        const element = event.target;
        //toggle se usa para checar si una clase ya está definida y la puede cambiar, agregar o remover si es necesario
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    }

})();