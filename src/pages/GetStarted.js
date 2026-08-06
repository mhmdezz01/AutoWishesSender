import fireworks from "../logos/fireworks.gif";

function GetStarted() {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 py-4 w-100 overflow-x-hidden" 
      style={{ backgroundColor: "rgb(176, 118, 122)" }}
    >
      <div className="container px-3" style={{ maxWidth: "600px" }}>
        
        <div className="text-center mb-3">
          <img 
            src={fireworks} 
            alt="cake Logo" 
            style={{ maxWidth: "180px", width: "100%", height: "auto" }} 
          />
        </div>
        
        <h1 
          className="my-3 text-center fs-2 fs-sm-1" 
          style={{ fontFamily: 'Playwrite AR, cursive' }}
        >
          Your Partner's Birth Date
        </h1>

  
        <form onSubmit={(e) => e.preventDefault()} className="w-100 mx-auto" style={{ maxWidth: "500px" }}>
          
          <div className="row g-3 justify-content-center mb-3">
            <div className="col-12 col-sm-6" style={{ maxWidth: "200px" }}>
              <label className="fw-bold d-block mb-2 text-center text-sm-start">Date to send</label>
              <input 
                type="date" 
                className="form-control border-0 shadow-none text-center text-sm-start" 
                style={{ backgroundColor: "rgb(181, 179, 255)" }} 
              />
            </div>
            <div className="col-12 col-sm-6" style={{ maxWidth: "200px" }}>
              <label className="fw-bold d-block mb-2 text-center text-sm-start">Time to send</label>
              <input 
                type="time" 
                className="form-control border-0 shadow-none text-center text-sm-start" 
                style={{ backgroundColor: "rgb(181, 179, 255)" }} 
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <input 
                id="fName" 
                type="text" 
                placeholder="Partner's first name" 
                className="form-control border-0 shadow-none" 
                style={{ backgroundColor: "rgb(140, 114, 101)", color: "#fff" }} 
              />
            </div>
            <div className="col-12 col-sm-6">
              <input 
                id="lName" 
                type="text" 
                placeholder="Partner's last name" 
                className="form-control border-0 shadow-none" 
                style={{ backgroundColor: "rgb(140, 114, 101)", color: "#fff" }} 
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <input 
                id="pNum" 
                type="tel" 
                placeholder="Partner's phone number" 
                className="form-control border-0 shadow-none" 
                style={{ backgroundColor: "rgb(140, 114, 101)", color: "#fff" }} 
              />
            </div>
            <div className="col-12 col-sm-6">
              <input 
                id="cNum" 
                type="tel" 
                placeholder="Country code with no '+,0'" 
                className="form-control border-0 shadow-none" 
                style={{ backgroundColor: "rgb(140, 114, 101)", color: "#fff" }} 
              />
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-12">
              <textarea 
                id="tArea" 
                rows={5} 
                placeholder="Write Your Wish" 
                className="form-control border-0 shadow-none" 
                style={{ backgroundColor: "rgb(86, 164, 155)", color: "#fff" }} 
              />
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => alert("Adding your info in the History tab")} 
              className="btn border-0 shadow-none text-white fw-semibold px-4 py-2" 
              type="submit"
              style={{ backgroundColor: "rgb(149, 144, 205)" }}
            >
              Submit & Redirect
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default GetStarted;