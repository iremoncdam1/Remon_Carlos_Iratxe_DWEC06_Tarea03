//Este componente muestra la bebida (según el id pasado como parámetro) en la lista de bebidas
import React, { useState, useEffect } from 'react';

function Cocktail({ id }) {
    //Se recogen todos los datos necesarios de la API
    //Estos los usaremos aquí
    const [imagen, setImagen] = useState('');
    const [strDrink, setStrDrink] = useState('');
    const [strGlass, setStrGlass] = useState('');
    const [strAlcoholic, setStrAlcoholic] = useState('');
    
    //Estos los pasaremos como parámetros al componente "Detalle" para mostrar la bebida seleccionada con toda su información
    const [strCategory, setStrCategory] = useState('');
    const [strInstructions, setStrInstructions] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [imagenDetalle, setImagenDetalle] = useState('');

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    useEffect(() => {
    let getDatos = async () => {
        try {
            let response = await fetch(url);
            let data = await response.json();
            //Se recogen los datos
            setImagen(data.drinks[0].strDrinkThumb);
            setStrDrink(data.drinks[0].strDrink)
            setStrGlass(data.drinks[0].strGlass)
            setStrAlcoholic(data.drinks[0].strAlcoholic)
            
            setStrCategory(data.drinks[0].strCategory)
            setStrInstructions(data.drinks[0].strInstructions)
            //También los ingredientes de la bebida
            let ingredientes2 = [];
            for (let i = 1; i <= 15; i++) {
                if (data.drinks[0][`strIngredient${i}`]) {
                    ingredientes2.push(data.drinks[0][`strIngredient${i}`]);
                } 
            }
            //console.log(id);
            //console.log(ingredientes2.length);
            setIngredientes(ingredientes2);
            setImagenDetalle(encodeURIComponent(imagen));
    
        } catch {
            console.error('Error');
        }
    };

    getDatos();
}, []); 

    return (    
        <article className="cocktail">
            {/*
                Se crea el articulo donde se mostrará la imagen de la bebida, un par de datos más y el botón para acceder a su información completa
            */}
            <div className="img-container">
                <img src={imagen} alt={strDrink}/>
            </div>
            <div className="cocktail-footer">
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p><a className="btn btn-primary btn-details" href={`/detalle/${id}/${strDrink}/${strCategory}/${strAlcoholic}/${strGlass}/${strInstructions}/${ingredientes}/${imagenDetalle}`}>details</a>
            </div>
        </article>
    );
}


export default Cocktail;