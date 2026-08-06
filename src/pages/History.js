function History() {    
  return (
    <div style={{ 
      backgroundColor: "rgb(255, 99, 71)", 
      minHeight: "100vh",
      padding: "clamp(10px, 3vw, 20px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start"
    }}>
      <div className="container" style={{ 
        paddingLeft: "clamp(5px, 2vw, 15px)",
        paddingRight: "clamp(5px, 2vw, 15px)",
        maxWidth: "100%",
        overflowX: "auto"
      }}>
        {/* Desktop Table View */}
        <div className="d-none d-md-block" style={{ width: "100%" }}>
          <table className="table" id="userTable" style={{ 
            border: "10px",
            fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
            backgroundColor: "white",
            borderRadius: "8px",
            overflow: "hidden",
            width: "100%",
            margin: "0 auto"
          }}>
            <thead style={{ backgroundColor: "#f8f9fa" }}>
              <tr>
                <th style={{ padding: "clamp(8px, 1vw, 12px)", textAlign: "center" }}>First Name</th>
                <th style={{ padding: "clamp(8px, 1vw, 12px)", textAlign: "center" }}>Last Name</th>
                <th style={{ padding: "clamp(8px, 1vw, 12px)", textAlign: "center" }}>Phone Number</th>
                <th style={{ padding: "clamp(8px, 1vw, 12px)", textAlign: "center" }}>Country Number</th>
                <th style={{ padding: "clamp(8px, 1vw, 12px)", textAlign: "center" }}>Message Sent</th>
              </tr>
            </thead>
            <tbody>
              {/* Table data will go here */}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="d-md-none">
          <div className="text-center mb-3" style={{ 
            color: "white", 
            fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
            fontWeight: "bold",
            padding: "10px",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: "8px"
          }}>
            History Records
          </div>
          
          <div className="text-center" style={{ 
            color: "white",
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            padding: "40px 20px",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "8px",
            marginTop: "20px"
          }}>
            <p style={{ margin: 0 }}>No records found</p>
            <small style={{ opacity: 0.7 }}>Add your first entry using the form</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;