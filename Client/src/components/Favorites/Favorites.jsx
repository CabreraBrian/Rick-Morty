import style from "./Favorites.module.css";
import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../Redux/action";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={style.filtros}>
        <h1 className={style.etiqueta}>Orden:</h1>
        <select className= {style.filtroL} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <h1 className={style.etiqueta}>Genero:</h1>
        <select className= {style.filtroR} onChange={handleFilter}>
          <option value="allCharacters">Todos los generos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      <div className={style.contenedor}>
        {myFavorites?.map(
          ({ id, name, status, species, gender, origin, image, onClose }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
                onClose={onClose}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
