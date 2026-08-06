import fireworks from "../logos/fireworks.gif";
//import addUserInfo from "../function/addUserInfo";
function GetStarted() {
    return(
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{backgroundColor:"rgb(176, 118, 122)"}}>

            <div className="p-5">
                <img src={fireworks} alt="cake Logo" style={{width:"200px"}}/>
            </div>

            <h1 style={{ fontFamily: 'Playwrite AR, cursive' }} className="m-5">Your Partner's Birth Date</h1>

            <div className="text-center">
                <label className="fw-bold d-block mb-2" >Date to send</label>
                <input type="date" className="form-control d-inline-block border-0 shadow-none" style={{width: "auto",minWidth:"160px",backgroundColor:"rgb(181, 179, 255)"}}/>
                <label className="fw-bold d-block mb-2" >Time to send</label>
                <input type="time" className="form-control d-inline-block border-0 shadow-none" style={{width: "auto",minWidth:"160px",backgroundColor:"rgb(181, 179, 255)"}}/>
            </div>

            <div className="p-4 mt-4 d-flex flex-column align-items-center gap-3">
                <div className="d-flex gap-4">
                    <input id="fName" type="text" placeholder="Partner's first name" className="form-control border-0 shadow-none" style={{width: "220px",backgroundColor:"rgb(140, 114, 101)"}}/>
                    <input id="lName" type="text" placeholder="Partner's last name" className="form-control border-0 shadow-none" style={{width: "220px",backgroundColor:"rgb(140, 114, 101)"}}/>
                </div>

                <div className="d-flex gap-4">
                    <input id="pNum" type="number" placeholder="Partner's phone number" className="form-control border-0 shadow-none" style={{width: "220px",backgroundColor:"rgb(140, 114, 101)"}}/>
                    <input id="cNum" type="number" placeholder="Country code with no'+,0'" className="form-control border-0 shadow-none" style={{width: "220px",backgroundColor:"rgb(140, 114, 101)"}}/>
                </div>
                 <textarea id="tArea" className="form-control border-0 shadow-none m-3" cols="50" rows="10" placeholder="Write Your Wish" style={{backgroundColor:"rgb(86, 164, 155)"}}></textarea>
            </div>
            
            <button onClick={() => alert("Adding your info in the History tab")} className="m-5 border-0 shadow-none" type="submit" class="btn m-3" style={{backgroundColor:"rgb(149, 144, 205)"}}>Submit & Redirect</button>

        </div>
    );
}

export default GetStarted;