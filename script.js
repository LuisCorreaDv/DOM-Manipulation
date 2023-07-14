import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

//Se utilizan los data atributes para dar una referencia mas concreta y evitar que con la refactorización del código se pierdan los atributos

//Immediately invoked function expression (IIFE)
//Para evitar que se pueda acceder a las funciones 
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

        //task.innerHTML = content;
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        //Union de padre e hijo para agregar las cards de manera dinamica
        list.appendChild(task);
    };

    //Se reciben 2 parámetros, el tipo de evento que se quiere escuchar y la acción a realizar
    btn.addEventListener("click", createTask);

})();