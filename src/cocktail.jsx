import React, { useState, useEffect } from 'react';

function Cocktail({ id }) {
  const [imagen, setImagen] = useState('');
  const [strDrink, setStrDrink] = useState('');
  const [strGlass, setStrGlass] = useState('');
  const [strAlcoholic, setStrAlcoholic] = useState('');

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  useEffect(() => {
    let getDatos = async () => {
        try {
            let response = await fetch(url);
            let data = await response.json();
            setImagen(data.drinks[0].strDrinkThumb);
            setStrDrink(data.drinks[0].strDrink)
            setStrGlass(data.drinks[0].strGlass)
            setStrAlcoholic(data.drinks[0].strAlcoholic)
        } catch {
            console.error('Error');
        }
    };

    getDatos();
}, []); 




    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={imagen} alt={strDrink}/>
            </div>
            <div className="cocktail-footer">
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                {//TODO:: Cambiar href
                }
                <p>{strAlcoholic}</p><a className="btn btn-primary btn-details" href="/cocktail/17222">details</a>
            </div>
        </article>
    );
}


export default Cocktail;