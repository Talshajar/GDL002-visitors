
const signIn = () => {
  let email = document.getElementById("logInEmail").value;
  let password = document.getElementById("logInPass").value;

  console.log(email);
  console.log(password);



  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
};

// document.getElementById('btnLogIn').addEventListener('click', signIn);
document.getElementById('btnLogIn').addEventListener('click', (event) => {
  event.preventDefault();
  signIn();
  document.getElementById("screenVisitors").style.display = "none";
  document.getElementById("screenHeader").style.display = "none";
  // hiddenLog();
});




// document.getElementById("btnScreenLogUp").addEventListener("click",hidden);




const signUp = () => {
  let email = document.getElementById("logUpEmail").value;
  let password = document.getElementById("logUpPass").value;

  console.log(email);
  console.log(password);



  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      checkEmail()
    })

    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);


      // ...
    });

};

//document.getElementById('btnLogUp').addEventListener('click', signUp);
// const hiddenLogIn = () => {
//   document.getElementById("screenLogin").style.display = "none";
//   document.getElementById("screenLogUp").style.display = "block";
// }
// document.getElementById("btnScreenLogUp").addEventListener("click", hiddenLogIn)

document.getElementById('btnLogUp').addEventListener('click', (event) => {
  event.preventDefault();
  signUp();
});




// document.getElementById("btnLogIn").addEventListener("click",showScreen);



const observerFb = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("logeado");
      wallPaper(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      console.log(user.emailVerified);
      console.log(displayName,email,emailVerified,photoURL,uid,providerData,isAnonymous); 
      // ...
    } else {
      // User is signed out.
      console.log("no logeado");

      // ...
    }
  });
};
observerFb();

const wallPaper = (user) => {
  var user = user;
  const container = document.getElementById("container");
  if (user.emailVerified) {
    container.innerHTML = `
 
<ul class="menu">
  <li title="Registros"><button>Registros</button></li>
  <li title="Estadisticas"><button id="createPost">Estadisticas</button></li>
  <li title="Kiosko"><button><a href="kiosko.html">Kiosko</a></button></li>
  <li title="LogOut"><button class="navbar-item" id="btnLogOut">Cerrar Sesión</button></li>
</ul>

<div class="contentWallPaper">
<table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">id</th>
    <th scope="col">first Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Email Address</th>
    <th scope="col">Host</th>
    <th scope="col">Time Visited</th>
  </tr>
</thead>
<tbody id="dataVisitors">
 
</tbody>
</table>


</div>

      <section class="contentWallPaper">
      <div class="form-group mx-sm-3 mb-2">
          <h1>Add User</h1>
            <input class="form-control" type="text" id="nombre" placeholder="Name" >
            <input class="form-control" type="email" id="email" placeholder="Email" >
              <select class="form-control" name="selectTurn" id="turn">
                <option value="empresa" selected>Company</option>
                <option value="freelancer">Freelancer</option>
              </select>
            <button class="btn btn-primary mb-2" id="boton">Save</button>
          </div>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Company</th>
                </tr>
              </thead>
              <tbody id="dataCoworking">
               
              </tbody>
            </table>
          </section>
  `
  const saveName = () => {
    let nombreCoworking = document.getElementById("nombre").value;//Guardando valor de nombre
    let emailCoworking = document.getElementById("email").value;//Guardando valor de email
    let occupationCoworking = document.getElementById("turn").value;
    console.log(nombreCoworking,emailCoworking,occupationCoworking);
    window.main.addCoworking(nombreCoworking,emailCoworking,occupationCoworking);
};
document.getElementById('boton').addEventListener('click', (event) => {
  event.preventDefault();
  saveName();
});
    document.getElementById('btnLogOut').addEventListener('click', (event) => {
      event.preventDefault();
      // showScreen();
      logOut();
    });
    // document.getElementById("boton").addEventListener("click", (event) => {
    //   event.preventDefault();
    //   addCoworking();
    //   console.log(1);
    // });
  };
  document.getElementById("dataVisitors");

  db.collection("visitors").onSnapshot((querySnapshot) => {
    // dataVisitors.innerHTML = " " ;
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      dataVisitors.innerHTML += `
      <tr>
        <th scope="row">Register Visitor</th>
        <td>${doc.data().name}</td>
        <td>${doc.data().lastName}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().host}</td>
        <td>${doc.data().time}</td>
      </tr>
      `
     // console.log(showCoworking);
    });
  });

  document.getElementById("dataCoworking");

    db.collection("coworking").onSnapshot((querySnapshot) => {
      dataCoworking.innerHTML = " " ;
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        dataCoworking.innerHTML += `
        <tr>
          <th scope="row">Register Coworking</th>
          <td>${doc.data().nombre}</td>
          <td>${doc.data().email}</td>
          <td>${doc.data().occupation}</td>
        </tr>
        `
       // console.log(showCoworking);
      });
    });
};

function Refresh() {
  location.reload();
}

const logOut = () => {
  firebase.auth().signOut()
    .then(function () {
      console.log("saliendo.....");

    })
    .catch(function (error) {
      console.log("error")
    })
  Refresh();
};



const checkEmail = () => {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    console.log("enviando correo...");
  }).catch(function (error) {
    // An error happened.
    console.log("error");

  });
}



// Initialize Cloud Firestore 
const db = firebase.firestore();

const addCoworking = (nombre, email, occupation) => {
  console.log('estoy')
  //Agregar coworking
  db.collection("coworking").add({
      nombre: nombre,
      email: email,
      turn: occupation
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

const addVisitors = (name,lastName,email,host,time,camera) => {
  console.log('estoy')
  //Agregar coworking
  db.collection("visitors").add({
      name: name,
      lastName : lastName,
      email: email,
      host: host,
      time: time,
      camera: camera
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

}

window.main = {
  addCoworking : addCoworking,
  addVisitors : addVisitors
};
  
