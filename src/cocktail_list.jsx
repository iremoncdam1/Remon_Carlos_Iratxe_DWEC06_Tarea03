function Cocktail_list() {
    return (
        <main>
            <section className="section">
                <h2 className="section-title">cocktails</h2>
                <div className="cocktails-center">


                    {
                        //Habrá que hacer un articulo por cada cocktail
                    }
                    <article className="cocktail">
                        <div className="img-container"><img
                                src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt="A1"></img>
                        </div>
                        <div className="cocktail-footer">
                            <h3>A1</h3>
                            <h4>Cocktail glass</h4>
                            <p>Alcoholic</p><a className="btn btn-primary btn-details" href="/cocktail/17222">details</a>
                        </div>
                    </article>
                    
                    
                </div>
            </section>
        </main>
    );
}

export default Cocktail_list;
