//using bootstrap

function Reviews() {
  return (
    <div style={{ 
      backgroundColor: "rgb(255, 99, 71)", 
      minHeight: "100vh",
      padding: "clamp(1rem, 5vw, 100px)"
    }}>
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          
          <div className="carousel-indicators" style={{
            bottom: "clamp(-30px, -2vw, -10px)",
            position: "relative",
            marginTop: "1rem"
          }}>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner" style={{ padding: "1rem 0 3rem 0" }}>
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <div className="card w-100" style={{ 
                  maxWidth: "clamp(280px, 70vw, 18rem)",
                  margin: "0 auto"
                }}>
                  <div className="card-body">
                    <h5 className="card-title text-center" style={{
                      fontSize: "clamp(1.1rem, 3vw, 1.25rem)"
                    }}>User 1</h5>
                    <p className="card-text" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      textAlign: "center"
                    }}>This is a very well-designed and highly useful website.
                      I would definitely recommend it,
                      particularly for those who have experienced being grounded before.🥲</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <h6 className="text-center" style={{ 
                      color: 'rgb(90, 90, 90)',
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      marginTop: "0.5rem"
                    }}>Additional Features</h6>
                    <li className="list-group-item text-center" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      padding: "0.5rem 0.75rem"
                    }}><b>Sending money via a local online WebApp</b></li>
                    <h6 className="text-center" style={{ 
                      color: 'rgb(90, 90, 90)',
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      marginTop: "0.5rem"
                    }}>Additional Notes</h6>
                    <li className="list-group-item text-center" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      padding: "0.5rem 0.75rem"
                    }}><b>Nothing till now</b></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="card w-100" style={{ 
                  maxWidth: "clamp(280px, 70vw, 18rem)",
                  margin: "0 auto"
                }}>
                  <div className="card-body">
                    <h5 className="card-title text-center" style={{
                      fontSize: "clamp(1.1rem, 3vw, 1.25rem)"
                    }}>User 2</h5>
                    <p className="card-text" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      textAlign: "center"
                    }}>Decent website. Useful in some cases,
                      but nothing extraordinary.
                      It works fine, though I've seen better alternatives out there.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <h6 className="text-center" style={{ 
                      color: 'rgb(90, 90, 90)',
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      marginTop: "0.5rem"
                    }}>Additional Features</h6>
                    <li className="list-group-item text-center" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      padding: "0.5rem 0.75rem"
                    }}><b>Book a table at a well-known restaurant</b></li>
                    <h6 className="text-center" style={{ 
                      color: 'rgb(90, 90, 90)',
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      marginTop: "0.5rem"
                    }}>Additional Notes</h6>
                    <li className="list-group-item text-center" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      padding: "0.5rem 0.75rem"
                    }}><b>Enhance user experience</b></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="card w-100" style={{ 
                  maxWidth: "clamp(280px, 70vw, 18rem)",
                  margin: "0 auto"
                }}>
                  <div className="card-body">
                    <h5 className="card-title text-center" style={{
                      fontSize: "clamp(1.1rem, 3vw, 1.25rem)"
                    }}>User 3</h5>
                    <p className="card-text" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      textAlign: "center"
                    }}>Amazing website! Super user-friendly, fast, and genuinely helpful.
                      Highly recommend it to everyone , easily one of the best I've come across!</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <h6 className="text-center" style={{ 
                      color: 'rgb(90, 90, 90)',
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      marginTop: "0.5rem"
                    }}>Additional Features</h6>
                    <li className="list-group-item text-center" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      padding: "0.5rem 0.75rem"
                    }}><b>Plan a vacation outside your home country</b></li>
                    <h6 className="text-center" style={{ 
                      color: 'rgb(90, 90, 90)',
                      fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                      marginTop: "0.5rem"
                    }}>Additional Notes</h6>
                    <li className="list-group-item text-center" style={{
                      fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                      padding: "0.5rem 0.75rem"
                    }}><b>Nothing till now</b></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" style={{
            width: "clamp(20px, 5vw, 40px)",
            opacity: "0.7"
          }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" style={{
            width: "clamp(20px, 5vw, 40px)",
            opacity: "0.7"
          }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;