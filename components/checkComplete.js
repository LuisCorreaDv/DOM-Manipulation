//Creación Icono
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
};


const completeTask = (event) => {
    const element = event.target;
    //toggle se usa para checar si una clase ya está definida y la puede cambiar, agregar o remover si es necesario
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

export default checkComplete;