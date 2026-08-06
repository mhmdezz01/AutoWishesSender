import fireworks from "../logos/fireworks.gif";
//import addUserInfo from "../function/addUserInfo";

function GetStarted() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100" 
         style={{
           backgroundColor:"rgb(176, 118, 122)",
           overflowX: "hidden",
           width: "100%"
         }}>
      
      <div className="container py-4" style={{
        maxWidth: "600px",
        paddingLeft: "clamp(10px, 3vw, 20px)",
        paddingRight: "clamp(10px, 3vw, 20px)",
        width: "100%"
      }}>
        <div className="text-center">
          <img src={fireworks} alt="cake Logo" style={{
            maxWidth: "200px",
            width: "100%",
            height: "auto"
          }} />
        </div>
        <h1 style={{ fontFamily: 'Playwrite AR, cursive' }} className="m-3 m-sm-5 text-center">
          Your Partner's Birth Date
        </h1>
        <div className="text-center">
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3" 
               style={{
                 maxWidth: "400px",
                 margin: "0 auto",
                 width: "100%"
               }}>
            <div style={{ width: "100%", maxWidth: "170px" }}>
              <label className="fw-bold d-block mb-2">Date to send</label>
              <input type="date" className="form-control border-0 shadow-none w-100" 
                     style={{
                       backgroundColor:"rgb(181, 179, 255)",
                       minWidth: "140px",
                       width: "100%"
                     }} />
            </div>
            <div style={{ width: "100%", maxWidth: "170px" }}>
              <label className="fw-bold d-block mb-2">Time to send</label>
              <input type="time" className="form-control border-0 shadow-none w-100" 
                     style={{
                       backgroundColor:"rgb(181, 179, 255)",
                       minWidth: "140px",
                       width: "100%"
                     }} />
            </div>
          </div>
        </div>

        <div className="p-4 mt-4 d-flex flex-column align-items-center gap-3" style={{
          padding: "clamp(15px, 3vw, 24px)",
          width: "100%"
        }}>
          <div className="d-flex flex-column flex-sm-row gap-4 w-100" style={{
            maxWidth: "500px",
            width: "100%"
          }}>
            <input id="fName" type="text" placeholder="Partner's first name" 
                   className="form-control border-0 shadow-none w-100" 
                   style={{
                     backgroundColor:"rgb(140, 114, 101)",
                     width: "100%",
                     minWidth: "0",
                     boxSizing: "border-box"
                   }} />
            <input id="lName" type="text" placeholder="Partner's last name" 
                   className="form-control border-0 shadow-none w-100" 
                   style={{
                     backgroundColor:"rgb(140, 114, 101)",
                     width: "100%",
                     minWidth: "0",
                     boxSizing: "border-box"
                   }} />
          </div>

          <div className="d-flex flex-column flex-sm-row gap-4 w-100" style={{
            maxWidth: "500px",
            width: "100%"
          }}>
            <input id="pNum" type="number" placeholder="Partner's phone number" 
                   className="form-control border-0 shadow-none w-100" 
                   style={{
                     backgroundColor:"rgb(140, 114, 101)",
                     width: "100%",
                     minWidth: "0",
                     boxSizing: "border-box"
                   }} />
            <input id="cNum" type="number" placeholder="Country code with no'+,0'" 
                   className="form-control border-0 shadow-none w-100" 
                   style={{
                     backgroundColor:"rgb(140, 114, 101)",
                     width: "100%",
                     minWidth: "0",
                     boxSizing: "border-box"
                   }} />
          </div>

          <textarea id="tArea" className="form-control border-0 shadow-none m-3 w-100" 
                    cols="50" rows="10" placeholder="Write Your Wish" 
                    style={{
                      backgroundColor:"rgb(86, 164, 155)",
                      maxWidth: "500px",
                      width: "100%",
                      boxSizing: "border-box",
                      minWidth: "0"
                    }} />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button onClick={() => alert("Adding your info in the History tab")} 
                  className="btn border-0 shadow-none" 
                  type="submit"
                  style={{
                    backgroundColor:"rgb(149, 144, 205)",
                    padding: "0.5rem 1.5rem"
                  }}>
            Submit & Redirect
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;