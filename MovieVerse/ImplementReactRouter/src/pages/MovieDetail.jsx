import { useLoaderData,NavLink } from "react-router-dom";

export const MovieDetail=()=>{
    const movie=useLoaderData();
    console.log(movie);
    return(
       <>
        <div className="container my-4">
        <h2 className="mb-4 fw-bold">{movie.name}</h2>

        <div className="row bg-light p-4 rounded shadow">
          {/* Image Section */}
          <div className="col-md-5">
            <img
              src={movie.image.original || movie.image.medium}
              alt={movie.name}
              className="img-fluid rounded"
              style={{ height: "500px", width: "100%" }}
            />
          </div>

          {/* Details Section */}
          <div className="col-md-7 d-flex flex-column justify-content-between">
            <div>
              <p>
                <strong>Type:</strong> {movie.type}
              </p>
              <p>
                <strong>Language:</strong> {movie.language}
              </p>
               <p>
                <strong>Premiered:</strong> {movie.premiered}
              </p>
              <p>
                <strong>Ended:</strong> {movie.ended}
              </p>
              <p  className="mb-5"><strong>Rating:</strong> {movie.rating.average}</p>
              <h5><strong>Summary</strong></h5>
              <div
                dangerouslySetInnerHTML={{ __html: movie.summary }}
                className="mb-3"
              />
            </div>    
            <button className="btn btn-sm btn-outline-dark" style={{backgroundColor:"black"}}><NavLink to={movie.url} style={{textDecoration:"none",color:"orange",fontWeight:"bold"}}>   Watch now</NavLink></button>
          </div>
        </div>
      </div>
       </>
    )
}