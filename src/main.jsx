import ReactDOM from 'react-dom/client'
import './index.css' 
import NavBar from './navbar.jsx'
import App from './app.jsx'

//En el elemento con "id = root" del html añadimos nuestro elemento App
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <NavBar/>
        {//<App/>
        }




        {
            //ABOUT US (ejemplo2)
        }
        <section className="section about-section">
            <h1 className="section-title">about us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in
                officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
                nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?
            </p>
        </section>
    </>
    
)