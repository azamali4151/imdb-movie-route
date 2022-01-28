import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import imbd from '../imbd.png';

const Navbar = (props) => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                <img src={imbd} width="120" height="50"></img>
                </Link>
                <Link className="navbar-brand" to="/movies">
                    Movies
                </Link>
                <Link className="navbar-brand" to="/add-movie">
                    Add Movie
                </Link>
                <Link className="navbar-brand" to="/login">
                    Login
                </Link>
                <Link className="navbar-brand" to="/register">
                    Register
                </Link>
                
            </nav>
        </>
    );
};

export default Navbar;