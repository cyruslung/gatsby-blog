import React from "react"

const Comment = (props) => {
  return (
    <div className="row">
        <div className="col-lg-9 col-md-10 mx-auto" style={{background: "#F1F1F1", padding: "10px 15px", marginBottom: "20px"}}>
            <h5> title</h5>
            <p>感謝版主</p>
            <p style={{fontSize: "18px", color: "#888888", background: "#E3E3E3", padding: "20px", margin: "0", maxWidth: "550px"}}>版主: 謝謝指教</p>
            <span style={{float: "right", fontSize: "18px", color: "#888888"}}>Hong edited on 2018-01-25 00:25</span>
        </div>
    </div>
)}
export default Comment

