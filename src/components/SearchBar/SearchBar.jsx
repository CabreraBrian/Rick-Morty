import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar= ({onSearch}) => {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.contenedor}>
         <input type='search' placeholder="Insertar ID. . ." onChange={handleChange} value={id}></input>
         <button onClick={()=>{onSearch(id)}} className={style.searchButton}>Agregar</button>
      </div>
   );
}

export default SearchBar;