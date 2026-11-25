const formulario = document.querySelector('#form-cita');
const lista = document.querySelector('#lista-citas');
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    //extraigo los valores de cada elemento buscnadolos por querySelector y el id de cada uno
    const texto = document.querySelector("#texto").value.trim();
    const dia =  document.querySelector("#dia").value;
    const hora = document.querySelector("#hora").value;
    const descripcion = document.querySelector("#descripcion").value.trim();
    //armo la lista con los valores y al final agrego al html
    const li = document.createElement("li");
    //agrego cada elementeo a la lista
    const titulo = document.createElement("h3");
    titulo.textContent = texto;
    const tiempo = document.createElement("time");
    tiempo.dateTime = `${dia}T${hora}`;
    tiempo.textContent = `${dia} a las ${hora}`;
    const detalle = document.createElement("p");
    detalle.textContent = descripcion;
    //meto todos estos elementos en la lista
    li.append(titulo, tiempo, detalle);
    //agrego mi lista al html
    lista.append(li);
    //limpio el formulario
    formulario.reset();
});