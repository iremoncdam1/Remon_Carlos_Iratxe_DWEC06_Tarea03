import { useParams } from "react-router-dom";

function Detalle() {
    const { id, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, ingredientes, imagen} = useParams()
    let ingredientesArray = ingredientes.split(",");
    //La foto no me deja mostrarla. Buscando información he visto que esta era una manera posible pero no me funciona
    const decodedImageUrl = decodeURIComponent(imagen);

    return (
        <section className="section cocktail-section">
            <a className="btn btn-primary" href="/cocktail_list">back home</a> {/*Botón para volver a la lista */}
            <h1 className="section-title">{strDrink}</h1>

            <div className="drink">
                <img src={decodedImageUrl} alt={strDrink} className="drink-detail"/>
                <div className="drink-info">
                    {/*Se muestran todos los detlles de la bebid< */}
                    <p><span className="drink-data">name :</span>{strDrink}</p>
                    <p><span className="drink-data">category :</span> {strCategory}</p>
                    <p><span className="drink-data">info :</span> {strAlcoholic}</p>
                    <p><span className="drink-data">glass :</span> {strGlass}</p>
                    <p><span className="drink-data">instructons :</span> {strInstructions}</p>
                    <p><span className="drink-data">ingredients :</span>
                    
                    { 
                        ingredientesArray.map((ingrediente, index) => (
                            <span key={index}>{ingrediente}</span>
                        ))
                    }
                    </p>
                </div>
            </div>


        </section> 
    );


    //12 -> {//<img src={imagen} alt={strDrink} className="drink-detail"/>}

}


export default Detalle;