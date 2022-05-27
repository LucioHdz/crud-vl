import Formulario from "./components/Formulario";
import List from "./components/List";
import imagen from './img/descarga.png'


function App() {
  const datos = [
    {id:1,imagen:imagen,titulo:'Depresion'},
    {id:2,imagen:imagen,titulo:'Depresion'},
    {id:3,imagen:imagen,titulo:'Depresion'},
    {id:4,imagen:imagen,titulo:'Depresion'},
    {id:5,imagen:imagen,titulo:'Depresion'},
    {id:6,imagen:imagen,titulo:'Depresion'},
    {id:7,imagen:imagen,titulo:'Depresion'},
    {id:8,imagen:imagen,titulo:'Depresion'},
    {id:9,imagen:imagen,titulo:'Depresion'},
    {id:10,imagen:imagen,titulo:'Depresion'},
    {id:11,imagen:imagen,titulo:'Depresion'},
    {id:12,imagen:imagen,titulo:'Depresion'}
  ]
  return (
    <div className="d-flex flex-wrap col-12 ">
      <List datos={datos} />
      <Formulario />
    </div>
  );
}

export default App;
