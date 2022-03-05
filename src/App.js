import image from './memeface.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>INVITACION FACHERA</h1>
      <p>Buenas tardes don Ivan, </p>
      <p>La presente es para pedir el permiso para que la señorita Paula Valeria Sanchez Nieto asista al cine el dia 05 de Marzo del 2022</p>
      <p>Lugar: Royal films - VIVA Tunja</p>
      <p>Hora: 9 p.m.</p>
      <p>Hora de llegada: 12:30 p.m.</p>
      <p>Muchas gracias, quedo atento a su respuesta.</p>
      <img src={image}/>
    </div>
  );
}

export default App;
