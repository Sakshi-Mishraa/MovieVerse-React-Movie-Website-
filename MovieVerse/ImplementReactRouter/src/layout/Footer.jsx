 export const Footer=()=>{
    return(
        <footer className="footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Left Column */}
          <div className="col-md-4 mb-4">
            <p>
              Welcome to <strong>MovieVerse</strong>, your ultimate destination for explore your favourite movies!
            </p>
          </div>

          {/* Middle Column - Shopping */}
          <div className="col-md-2 mb-4">
            <h5>SHOPPING</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Computer Store</a></li>
              <li><a href="#" className="text-light text-decoration-none">Laptop Store</a></li>
              <li><a href="#" className="text-light text-decoration-none">Accessories</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sales & Discount</a></li>
            </ul>
          </div>

          {/* Middle Column - Experience */}
          <div className="col-md-3 mb-4">
            <h5>Experience</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Payment Method</a></li>
              <li><a href="#" className="text-light text-decoration-none">Delivery</a></li>
              <li><a href="#" className="text-light text-decoration-none">Return and Exchange</a></li>
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div className="col-md-3 mb-4">
            <h5>NEWSLETTER</h5>
            <p>Be the first to know about new arrivals, sales & promos!</p>
            <input
              type="email"
              placeholder="Your Email"
              className="form-control bg-dark text-light border-bottom border-secondary"
            />
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-top border-secondary mt-4" style={{ fontSize: "14px" }}>
        Design and Code by Sakshi Mishra 
      </div>
    </footer>
    )
 }
 
 
 