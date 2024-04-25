import React, { useState, useEffect } from 'react'; 
import Cocktail from './cocktail';

function Cocktail_list() {
    const [bebidas, setBebidas] = useState([]);
    
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

    useEffect(() => {
        let getDatos = async () => {
            try {
                let response = await fetch(url);
                let data = await response.json();
                let ids = data.drinks.map(drink => drink.idDrink);
                setBebidas(ids);
            } catch {
                console.error('Error');
            }
        };

        getDatos();
    }, []); 


    //console.log(bebidas.length);
    //console.log(bebidas);

    return (
        //<h1>Una lista de cocktails</h1>
        <main>
            <section className="section">
                <h2 className="section-title">cocktails</h2>
                <div className="cocktails-center">

                {bebidas.map(id => (
                    <Cocktail key={id} id={id} />
                ))} 
                </div>
            </section>
        </main>
    );
}

export default Cocktail_list;
