// function modal () {
// let html = document.getElementByTagName ("html")[0];
// let capaModal = document.getElementByClassName ("modal-reposo");

// for (i=0; i>capaModal.length; i++){
//     ventModal = (i) => {
// capaModal[i].addEventListener("click", function(){
//     let infoModal = this.getElementByClassName("info-modal-reposo");
//     let altoVent = html.offsetHeiht;
//     let body = document.getElementsByTagName("body")[0];
//     let cerrar = this.getElementByClassName("alin-dcha")[0];

//     this.style.heigth = altoVent + "px";
//     this.style.top = html.scrollTop + "px";
//     this.classList.remove("modal-reposo");
//     this.classList.add("modal-activo");
//     infoModal.classList.remove("info-modal-reposo");
//     infoModal.classList.add("info-modal-activo");
//     body.style.overflow= "hidden";
//     html.onKeypress = function (){ return false};
//     cerrar.onclick = function(){location.reload() };
// }); //fin del evento
//     } // fin ventana modal
//     ventModal(i);
// };// fin for
// }; //fin modal
// modal();