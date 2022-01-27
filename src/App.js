
import './App.css';
import Card from './Card';


const App=()=> {
 const nombre = "Mecha"
  return (
<div className= "contenedor">
<h1>Hola {nombre}</h1>  

<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>

</div>
    )
}

export default App;



