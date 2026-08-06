import fireworks from "../logos/fireworks.gif";
//import addUserInfo from "../function/addUserInfo";

function GetStarted() {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 py-4 overflow-hidden w-100" 
      style={{ backgroundColor: "rgb(176, 118, 122)" }}
    >
      <div className="container px-3" style={{ maxWidth: "600px" }}>
        
        {/* Header Section */}
        <div className="text-center mb-3">
          <img 
            src={fireworks} 
            alt="cake Logo" 
            style={{ maxWidth: "200px", width: "100%", height: "auto" }} 
          />
        </div>
        <h1 
          className="my-3 my-sm-4 text-center fs-2 fs-sm-1" 
          style={{ fontFamily: 'Playwrite AR, cursive' }}
        >
          Your Partner's Birth Date
        </h1>

        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mx-auto" style={{ maxWidth: "400px" }}>
          <div className="w-100" style={{ maxWidth: "170px" }}>
            <label className="fw-bold d-block mb-2 text-center text-sm-start">Date to send</label>
            <input 
              type="date" 
              className="form-control border-0 shadow-none" 
              style={{ backgroundColor: "rgb(181, 179, 255)" }} 
            />
          </div>
          <div className="w-100" style={{ maxWidth: "170px" }}>
            <label className="fw-bold d-block mb-2 text-center text-sm-start">Time to send</label>
            <input 
              type="time" 
              className="form-control border-0 shadow-none" 
              style={{ backgroundColor: "rgb(181, 179, 255)" }} 
            />
          </div>
        </div>

        <div className="d-flex flex-column align-items-center gap-3 mt-4 mx-auto" style={{ maxWidth: "500px" }}>
          
          <div className="d-flex flex-column flex-sm-row gap-3 w-100">
            <input 
              id="fName" 
              type="text" 
              placeholder="Partner's first name" 
              className="form-control border-0 shadow-none" 
              style={{ backgroundColor: "rgb(140, 114, 101)" }} 
            />
            <input 
              id="lName" 
              type="text" 
              placeholder="Partner's last name" 
              className="form-control border-0 shadow-none" 
              style={{ backgroundColor: "rgb(140, 114, 101)" }} 
            />
          </div>

          <div className="d-flex flex-column flex-sm-row gap-3 w-100">
            <input 
              id="pNum" 
              type="tel" 
              placeholder="Partner's phone number" 
              className="form-control border-0 shadow-none" 
              style={{ backgroundColor: "rgb(140, 114, 101)" }} 
            />
            <input 
              id="cNum" 
              type="tel" 
              placeholder="Country code with no '+,0'" 
              className="form-control border-0 shadow-none" 
              style={{ backgroundColor: "rgb(140, 114, 101)" }} 
            />
          </div>

          <textarea 
            id="tArea" 
            rows={6} 
            placeholder="Write Your Wish" 
            className="form-control border-0 shadow-none w-100" 
            style={{ backgroundColor: "rgb(86, 164, 155)" }} 
          />
          
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button 
            onClick={() => alert("Adding your info in the History tab")} 
            className="btn border-0 shadow-none text-white fw-semibold" 
            type="submit"
            style={{ backgroundColor: "rgb(149, 144, 205)", padding: "0.6rem 2rem" }}
          >
            Submit & Redirect
          </button>
        </div>

      </div>
    </div>
  );
}

export default GetStarted;