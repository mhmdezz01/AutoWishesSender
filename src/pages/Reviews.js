//using bootstrap

function Reviews() {
  return (
    <div style={{ 
      backgroundColor: "rgb(255, 99, 71)", 
      minHeight: "100vh",
      padding: "clamp(1rem, 3vw, 2rem) 0"
    }}>
      <div className="container px-2 px-sm-3">
        <div id="myCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
          
          <div className="carousel-inner" style={{ paddingBottom: "2.5rem" }}>
            <div className="carousel-item active">
              <div className="d-flex justify-content-center px-4">
                <div className="card w-100" style={{ 
                  maxWidth: "22rem",
                  margin: "0 auto"
                }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">User 1</h5>
                    <p className="card-text">This is a very well-designed and highly useful website.
                      I would definitely recommend it,
                      particularly for those who have experienced being grounded before.🥲</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Features </h6>
                    <li className="list-group-item text-center"><b>Sending money via a local online WebApp</b></li>
                    <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Notes</h6>
                    <li className="list-group-item text-center"><b>Nothing till now</b></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex justify-content-center px-4">
                <div className="card w-100" style={{ 
                  maxWidth: "22rem",
                  margin: "0 auto"
                }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">User 2</h5>
                    <p className="card-text">Decent website. Useful in some cases,
                      but nothing extraordinary.
                      It works fine, though I've seen better alternatives out there.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Features </h6>
                    <li className="list-group-item text-center"><b>Book a table at a well-known restaurant</b></li>
                    <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Notes</h6>
                    <li className="list-group-item text-center"><b>Enhance user experience</b></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex justify-content-center px-4">
                <div className="card w-100" style={{ 
                  maxWidth: "22rem",
                  margin: "0 auto"
                }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">User 3</h5>
                    <p className="card-text">Amazing website! Super user-friendly, fast, and genuinely helpful.
                      Highly recommend it to everyone , easily one of the best I've come across!</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Features </h6>
                    <li className="list-group-item text-center"><b>Plan a vacation outside your home country</b></li>
                    <h6 className="text-center mt-2" style={{ color: 'rgb(90, 90, 90)' }}>Additional Notes</h6>
                    <li className="list-group-item text-center"><b>Nothing till now</b></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-indicators" style={{ marginBottom: "0" }}>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" style={{ width: "5%" }}>
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "invert(1) grayscale(100%)" }}></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" style={{ width: "5%" }}>
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "invert(1) grayscale(100%)" }}></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;