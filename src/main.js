// document.getElementById("screenLogUp").style.display = "none";



// const hiddenLog = () => {
//   document.getElementById("screenLogin").style.display = "none";
//   document.getElementById("screenLogUp").style.display = "none";
// }

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
  <h3>HOLA</h3>
  <ul class="menu">
  <li title="Registros"><button>Registros</button></li>
  <li title="Estadisticas"><button id="createPost">Estadisticas</button></li>
  <li title="Kiosko"><button><a href="kiosko.html">Kiosko</a></button></li>
  <li title="LogOut"><button class="navbar-item" id="btnLogOut">Cerrar Sesión</button></li>
</ul>
  `
    document.getElementById('btnLogOut').addEventListener('click', (event) => {
      event.preventDefault();
      // showScreen();
      logOut();
    });
  };
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


// const showScreen = () => {
//   document.getElementById("screenLogin").style.display = "none";
//   document.getElementById("container").style.display = "block";
//   document.getElementById("screenLogUp").style.display = "none";
// }

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


// module.exports = {
// signIn
// };
// document.getElementById('btnLogOut').addEventListener('click', logOut);
// document.getElementById('btnLogOut').addEventListener('click', (event) => {
//   event.preventDefault();
//   logOut();
// });



// Initialize Cloud Firestore 
const db = firebase.firestore();

window.main = {
  addCoworking: (nombre, email, occupation) => {
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
  },
  addVisitors : (name,lastName,email,host,time) => {
    console.log('estoy')
    //Agregar coworking
    db.collection("visitors").add({
        name: name,
        lastName : lastName,
        email: email,
        host: host,
        time: time
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
};
  //showCoworking:() => {
    // Mostrar coworking en la interfaz
  //userCoworking: () => {
  document.getElementById("dataCoworking");

    db.collection("coworking").onSnapshot((querySnapshot) => {
      dataCoworking.innerHTML = " " ;
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        dataCoworking.innerHTML += `
        <tr>
          <th scope="row">1</th>
          <td>${doc.data().nombre}</td>
          <td>${doc.data().email}</td>
          <td>${doc.data().occupation}/td>
        </tr>
        `
       // console.log(showCoworking);
      });
    });
    
  //}
//};
  
