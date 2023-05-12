import style from './About.module.css'
import yo from "../assets/yo.png.jpg";

const About = () => {
  return (
    <div className={style.about}> 
     <h1>Aplicacion creada por Brian Ezequiel Cabrera</h1>
     <h2>Creada en el modulo 2 del bootCamp de Henry</h2>
     <h2>No se que mas poner aca jaja</h2>
     <h3>Estoy probando cosas</h3>
     <h1> Supongo que tengo que poner una foto</h1>
     <h2>Aca ta:</h2>
     <img src={yo} alt='hola' ></img>
     <h2> Yo (De rojo) y mi primo Lucas en año nuevo.</h2>
     <ul>
      <li>
        <h1>hola muy buenas tardes</h1>
        <p>hola hola hola</p>
        <span>hola q tal todo bien?</span>
      </li>
      <li>
        <h1>hola yo estoy bien</h1>
      </li>
     </ul>
    </div>
    )
}

export default About
