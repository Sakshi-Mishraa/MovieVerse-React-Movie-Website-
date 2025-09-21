import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Card";

function Movie() {
  const movies=useLoaderData();
  console.log(movies);
  return(
    <>
<div className="container my-4">
  <div className="row">
      {movies.slice(0,28).map((currMovie)=>(
        <Card key={currMovie.id} currMovie={currMovie}/>
      ))}
  </div>
</div>
    </>
  ) 
}
export default Movie;