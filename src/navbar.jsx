import { Link } from "react-router-dom";

function NavBar() {
    
    return (
        <nav className="navbar">
            <div className="nav-center">
                <ul className="nav-links"><span>Cocktail DWEC-DB</span></ul>
                <ul className="nav-links">
                    {/*
                    
                    <li><a href="/">home</a></li>
                    <li><a href="/about">about</a></li>
                    
                    */}

                    <Link to="/cocktail_list">home</Link>
                    <Link to="/about">about</Link>


                </ul>
            </div>
        </nav>
    );
}

export default NavBar;