import { NavLink } from "react-router-dom"

export const Header=()=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <NavLink to="/" end  className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about"  className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie"  className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact"  className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Contact Us</NavLink>
            </li>
          </ul>

          {/* Sign Up and Login Buttons */}
          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
    </nav>
    )
}
