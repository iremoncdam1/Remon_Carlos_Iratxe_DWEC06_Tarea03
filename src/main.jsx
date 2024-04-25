import ReactDOM from 'react-dom/client'
import './index.css' 
import NavBar from './navbar.jsx'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./about.jsx"
import Cocktail_list from "./cocktail_list.jsx"

//En el elemento con "id = root" del html añadimos nuestro elemento App
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/about" element={ <About/> } />
            <Route path="/cocktail_list" element={ <Cocktail_list/> } />
        </Routes>
    </BrowserRouter>
)