const saveName = () => {
    let nombreCoworking = document.getElementById("nombre").value;//Guardando valor de nombre
    let emailCoworking = document.getElementById("email").value;//Guardando valor de email
    let occupationCoworking = document.getElementById("turn").value;
    console.log(nombreCoworking,emailCoworking,occupationCoworking);
    window.main.addCoworking(nombreCoworking,emailCoworking,occupationCoworking);
};
document.getElementById("boton").addEventListener("click", saveName);


const saveDataVisitors = () => {
  let nameVisitor = document.getElementById("inputFirst_name").value;//Guardando valor de nombre
  let lastNameVisitor = document.getElementById("inputLast_name").value//Guardar valor de last Name
  let emailVisitor = document.getElementById("input_Email").value;//Guardando valor de email
  let hostVisitor = document.getElementById("mySelect").value;
  let timeVisitor = document.getElementById("myTime").value;
  let camera = document.getElementById("takeSelfie-btn").value;
  console.log(nameVisitor,lastNameVisitor,emailVisitor,hostVisitor,timeVisitor,camera);
  window.main.addVisitors(nameVisitor,lastNameVisitor,emailVisitor,hostVisitor,timeVisitor,camera);
  
  
};
document.getElementById("btnVisitors").addEventListener("click", saveDataVisitors);
  
// Funcion que obtiene informacion de los coworking
//const userData = () => {
 //  let data = document.getElementById("dataCoworking");//Guardando informacion del coworking en una variable
   //document.getElementById("dataCoworking").innerHTML = data;
  // window.main.userCoworking();
  // console.log(data);
//}      
//document.getElementById("dataCoworking").addEventLis;tener(saveName , userData  );  

// --------------------------- CAMERA --------------------------------------------------
let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('canvasCamera');
let selfieButton = document.getElementById('takeSelfie-btn');

let handleSuccess = (stream) => {
  player.srcObject = stream;
};

selfieButton.addEventListener('click', function() {
  let context = canvasCamera.getContext('2d');
  context.drawImage(player, 0, 0, snapshotCanvas.width,
      snapshotCanvas.height);
  // console.log(context.canvas.toDataURL());

  const imageData = context.getImageData(0, 0, snapshotCanvas.width, snapshotCanvas.height);
  console.log(imageData);
});

navigator.mediaDevices.getUserMedia({
      video: true
  })
  .then(handleSuccess);

