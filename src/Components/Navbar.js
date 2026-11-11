import { Link } from "react-router-dom";
import logo from "../Logos/birthday-cake.gif";

function Navbar() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg mb-4" style={{backgroundColor: "aqua"}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center m-0" style={{ textDecoration: "none" }}>
            <img 
              src={logo} 
              alt="birthday Logo" 
              className="rounded-circle me-3" 
              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
            />
            <h1 className="h4 mb-0" style={{ fontFamily: 'Playwrite AR, cursive' }}>Auto Birthday Wishes✨</h1>
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarScroll" 
            aria-controls="navbarScroll" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul 
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" 
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link className="nav-link btn btn-success px-3 mx-1" style={{ color: "#ff0000" }} to="/get-started">Get Started</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link btn btn-success px-3 mx-1" style={{ color: "#ff0000" }} to="/rate-us">Rate Us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link btn btn-success px-3 mx-1" style={{ color: "#ff0000" }} to="/reviews">Reviews</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link btn btn-success px-3 mx-1" style={{ color: "#ff0000" }} to="/history">History</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
