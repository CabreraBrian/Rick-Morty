import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.nav}>

      <div className = {style.botones}>

      <Link to="/home">
        <button className= {style.botonH} >Home </button>
      </Link>

      <Link to="/About">
        <button className={style.botonA}>About</button>
      </Link>

      <NavLink to='/favorites'>
          <button className={style.botonF}>Favoritos❤️</button>
      </NavLink>

      </div>

      <img src={logo} alt="" />

      <SearchBar onSearch={onSearch} />

    </div>
  );
};

export default NavBar;
