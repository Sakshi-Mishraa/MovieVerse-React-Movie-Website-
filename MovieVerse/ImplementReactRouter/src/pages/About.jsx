const About = () => {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">ℹ️ About Us</h1>
        <p className="text-muted fs-5">
          Discover what powers <strong>MovieVerse</strong> — your home for entertainment.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="row align-items-center">
        {/* Image section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://png.pngtree.com/background/20230616/original/pngtree-cinematic-concept-clapper-board-with-film-reel-and-retro-camera-in-picture-image_3651856.jpg"
            alt="About us"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text section */}
        <div className="col-md-6">
          <h3 className="fw-semibold mb-3">Who We Are 🎬</h3>
          <p>
            At <strong>MovieVerse</strong>, we’re passionate movie lovers on a mission to bring the magic of cinema to your screen. Whether you love action, drama, sci-fi, or indie films, we’ve built this platform for you.
          </p>

          <h4 className="mt-4 fw-semibold">Why MovieVerse? 🍿</h4>
          <ul className="list-unstyled">
            <li>✅ Discover trending and timeless movies</li>
            <li>✅ Browse by genres, ratings, or release year</li>
            <li>✅ Learn about your favorite directors & actors</li>
            <li>✅ Smooth experience with dynamic navigation</li>
          </ul>

         <h5 className="mt-4 text-muted fst-italic">"For every mood, there's a movie waiting."</h5>
        </div>
      </div>
    </div>
  );
};

export default About;

