
import './App.css';
import Card from './Card';
import CardContainer from './CardContainer';

const App=()=> {
 const nombre = "Mecha"
  return (
<div className= "contenedor">
<h1>Hola {nombre}</h1>  

<Card></Card>
<CardContainer></CardContainer>
<CardContainer></CardContainer>
<CardContainer></CardContainer>
<CardContainer></CardContainer>



</div>
    )
}

export default App;



