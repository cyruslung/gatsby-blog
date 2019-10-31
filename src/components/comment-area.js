import React from "react"
import Comment from "./comment"

const CommentArea = (props) => {
  const postId = props.postId
  return (
  <>
    <div style={{background: "#f7f7f7", padding: "30px 0"}}>
      <div className="container">
        <row>
          <form className="col-lg-8 col-md-10 mx-auto">
            <div className="form-group">
              <label for="FormControlInput">使用者名稱</label>
              <input className="form-control" id="FormControlInput"/>
            </div>
            <div className="form-group">
              <label for="FormControlTextarea">留言</label>
              <textarea className="form-control" id="FormControlTextarea" rows="6"></textarea>
            </div>
            <button type="button" className="btn btn-secondary btn-sm">Submit</button>
          </form>
        </row>
      </div>

      <div className="container" style={{padding: "70px auto 70px", padding: "30px 20px 0"}}>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </div> 
    </div>
  </>
)}
export default CommentArea

