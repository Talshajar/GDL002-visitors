// const addCoworking1 = require("./main")


//import { signIn } from ".";

//firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
//    var errorCode = error.code;
//    var errorMessage = error.message;
    // ...
//  });

//  signIn(() => {
//    console.log(diste un clip);
      
//  });

// Funcion para obtener informacon de input coworking
const saveName = () => {
    let nombreCoworking = document.getElementById("nombre").value;//Guardando valor de nombre
    let emailCoworking = document.getElementById("email").value;//Guardando valor de email
    let occupationCoworking = document.getElementById("turn").value;
    console.log(nombreCoworking,emailCoworking,occupationCoworking);
    window.main.addCoworking(nombreCoworking,emailCoworking,occupationCoworking);
    
    
};



const saveDataVisitors = () => {
  let nameVisitor = document.getElementById("inputFirst_name").value;//Guardando valor de nombre
  let lastNameVisitor = document.getElementById("inputLast_name").value//Guardar valor de last Name
  let emailVisitor = document.getElementById("input_Email").value;//Guardando valor de email
  let hostVisitor = document.getElementById("mySelect").value;
  let timeVisitor = document.getElementById("myTime").value;
  let camera = document.getElementById("camera()");
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
//document.getElementById("dataCoworking").addEventListener(saveName , userData  );  

// --------------------------- CAMERA --------------------------------------------------
let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('canvasCamera');
let whiskyButton = document.getElementById('takeSelfie-btn');

let handleSuccess = function(stream) {
  //se concede el permiso y nos da acceso correcto a video con reproduciòn continua
  player.srcObject = stream;
};

whiskyButton.addEventListener('click', function() {
  let context = canvasCamera.getContext('2d');
  //Aparece el cuadro de video al lienzo.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
      snapshotCanvas.height);
  console.log(context.canvas.toDataURL());
  
});

navigator.mediaDevices.getUserMedia({
      video: true
  })
  .then(handleSuccess);

  function foto() {
    return "context.canvas.toDataURL()";

}