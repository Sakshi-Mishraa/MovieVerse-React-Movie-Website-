// function Home() {
//   return(
//     <>
//     <h1>Welcome to the Home Page</h1>
//     </>
    
//   ) 
// }

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";


// const Home = () => {
//   const navigate = useNavigate();

//   const featuredMovies = [
//     {
//       id: 1,
//       title: "Inception",
//       image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
//       description: "A mind-bending thriller where dreams become reality.",
//     },
//     {
//       id: 2,
//       title: "Interstellar",
//       image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//       description: "A journey through space, love, and time.",
//     },
//     {
//       id: 3,
//       title: "The Dark Knight",
//       image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//       description: "A gritty superhero masterpiece directed by Nolan.",
//     },
//   ];

//   return (
//     <div className="container my-4">
      // {/* Hero Section */}
      // <div className="bg-dark text-white p-5 rounded text-center">
      //   <h1 className="display-4 fw-bold">🎬 MovieVerse</h1>
      //   <p className="lead">
      //     Your ultimate destination to discover and explore your favorite movies.
      //   </p>
      //   <button
      //     className="btn btn-outline-light btn-lg mt-3"
      //     onClick={() => navigate("/movie")}
      //   >
      //     Browse Movies
      //   </button>
      // </div>

//       {/* Featured Movies Section */}
//       <h2 className="text-center mt-5 mb-4">🎥 Featured Movies</h2>
//       <div className="row g-4">
//         {featuredMovies.map((movie) => (
//           <div key={movie.id} className="col-md-4">
//             <div className="card h-100 shadow">
//               <img
//                 src={movie.image}
//                 className="card-img-top"
//                 alt={movie.title}
//               />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{movie.title}</h5>
//                 <p className="card-text flex-grow-1">{movie.description}</p>
//                 <button
//                   className="btn btn-primary mt-auto"
//                   onClick={() => navigate(`/movies/${movie.id}`)}
//                 >
//                   Watch Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="bg-dark text-white rounded-4 p-5 shadow-lg text-center">
        <h1 className="display-3 fw-bold mb-3">🎬 Welcome to MovieVerse</h1>
        <p className="lead mb-4">
          Explore a world of cinema, discover your favorite films, and dive into the magic of storytelling — all in one place.
        </p>
        <p>Your ultimate destination to discover and explore your favorite movies.</p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/movie")}
          >
            🎞 Browse Movies
          </button>
          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate("/contact")}
          >
            📬 Contact Us
          </button>
          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate("/about")}
          >
             🧑‍💼 About Us
          </button>
        </div>
      </div>

      {/* Optional Tagline Section */}
      <div className="text-center mt-5">
        <h5 className="text-muted fst-italic">
          "For every mood, there’s a movie waiting for you."
        </h5>
      </div>
    </div>
  );
};

export default Home;

