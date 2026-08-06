function History() {    
  return (
    <div 
      className="d-flex justify-content-center align-items-start min-vh-100 py-3 py-sm-4 w-100 overflow-x-hidden"
      style={{ backgroundColor: "rgb(255, 99, 71)" }}>
      <div className="container px-3" style={{ maxWidth: "1000px" }}>
        
        <div className="table-responsive rounded shadow-sm bg-white">
          <table className="table table-hover table-bordered align-middle text-center mb-0" id="userTable">
            <thead className="table-light text-nowrap">
              <tr>
                <th className="py-3">First Name</th>
                <th className="py-3">Last Name</th>
                <th className="py-3">Phone Number</th>
                <th className="py-3">Country Number</th>
                <th className="py-3">Message Sent</th>
              </tr>
            </thead>
            <tbody>
      
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default History;