import React from "react";
import uuid from "react-uuid";
import Formulario from "./components/Formulario";
import List from "./components/List";

// Necesario para firebase
import { initializeApp } from "firebase/app";

//Necesario para firestore
import { getFirestore, doc, setDoc, getDocs, collection, updateDoc, deleteDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBxdipiFn5Za8R6VzYR9jARNwcTE0E9YEo",
  authDomain: "galeria-8617f.firebaseapp.com",
  databaseURL: "https://galeria-8617f-default-rtdb.firebaseio.com",
  projectId: "galeria-8617f",
  storageBucket: "galeria-8617f.appspot.com",
  messagingSenderId: "1056085542716",
  appId: "1:1056085542716:web:9ca65f705393e2f637c039",
  measurementId: "G-QQQME0FZ96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);






function App() {
  const [datos, setDatos] = React.useState()

  const agregar = async (data) => {
    const id = uuid();
    await setDoc(doc(db, "galeria", id), {
      id: id,
      ...data
    });
    
    leer()
  }



  const leer = () => {
    getDocs(collection(db, "galeria")).then((querySnapshot) => {
      var datosTemporales = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        datosTemporales = [...datosTemporales, doc.data()]
      });
      setDatos(datosTemporales)
    })
  }

  const actualizar = async (id,datos) => {
    const referencia = doc(db, "galeria", id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(referencia, datos);
    leer();
  }

  const eliminar = async (id) =>{
    await deleteDoc(doc(db, "galeria", id));
    leer()
  }





















  return (
    <div className="d-flex flex-wrap col-12 ">
      {!datos ?
            (
              <button type="button" className=" col-12 btn btn-info lista" onClick={leer}>Leer de la base de datos</button>
            ):
      (<List actualizar={actualizar} eliminar={eliminar} datos={datos} />)} 
      <Formulario agregar={agregar} />
    </div>
  );
}

export default App;
