//Se utilizan los data atributes para dar una referencia mas concreta y evitar que con la refactorización del código se pierdan los atributos
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
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    //Union de padre e hijo para agregar las cards de manera dinamica
    list.appendChild(task);
    console.log(content);
}
console.log(btn);

//Se reciben 2 parámetros, el tipo de evento que se quiere escuchar y la acción a realizar
btn.addEventListener("click", createTask)