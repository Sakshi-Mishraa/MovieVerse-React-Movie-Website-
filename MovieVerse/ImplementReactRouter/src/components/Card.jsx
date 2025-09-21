import { NavLink, useNavigate } from "react-router-dom"

export const Card=({currMovie})=>{
    const navigate=useNavigate();
    
    return(
        <>
          <div className="col-md-3 mb-3" key={currMovie.id}>
            <div className="card h-100 shadow">
              {currMovie.image ? (
                <img
                  src={currMovie.image.original || currMovie.image.medium}
                  alt={currMovie.name}
                  className="card-img-top" style={{width:"100%", height:"400px"}}
                />
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: "300px", background: "#eee" }}
                >
                  <span>No Image</span>
                </div>
              )}
              <div className="card-body text-center">
                <h5 className="card-title">{currMovie.name}</h5>
                <p className="card-text"><b>Rating : </b>{currMovie.rating.average}</p>
                <button className="btn btn-sm btn-outline-dark w-100" onClick={() => navigate(`/movie/${currMovie.id}`)}>View Details</button>
                <br/> <br/>
                <button className="btn btn-sm btn-outline-dark w-100" style={{backgroundColor:"black"}}><NavLink to={currMovie.url} style={{textDecoration:"none",color:"orange",fontWeight:"bold"}}>   Watch now</NavLink></button>
              </div>
            </div>
          </div>
        </>
    )
}