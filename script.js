//Se utilizan los data atributes para dar una referencia mas concreta y evitar que con la refactorización del código se pierdan los atributos
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    //Evita el refresco de la página que tienen los forms por default
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}
console.log(btn); 

//Se reciben 2 parámetros, el tipo de evento que se quiere escuchar y la acción a realizar
btn.addEventListener("click", createTask)