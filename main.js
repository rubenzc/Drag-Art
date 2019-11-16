function onDragStart(ev){

  ev.dataTransfer.setData(
    'text/plain', ev.target.id,
    'string', 'TESTEANDOOOO');

  ev.currentTarget.style.backgroundColor = 'yellow';
}

function onDragOver(ev){
  //Previene que el navegador no deje soltar el elemento porque por defecto no deja hacerlo.
  //Dos prevenciones = 1 permiso (-)*(-) = +
  ev.preventDefault();
}

function onDrop(ev) {
  const id = ev.dataTransfer.getData('text');

    const dragabbleElement = document.getElementById(id);
    const dropzone = ev.target;

    dropzone.appendChild(dragabbleElement);

}