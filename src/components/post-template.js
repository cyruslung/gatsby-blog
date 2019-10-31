import React from "react"
import Layout from "./layout"

const PostPage = (props) => {
  const post = props.data.contentfulPost
  return (
  <Layout>
    <header className="masthead" style={{backgroundImage: `url('${post.image.file.url}')`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-heading">
              <h1>{post.title}</h1>
              <h2 className="subheading">{post.subTitle}</h2>
              <span className="meta">Posted by {post.author.name} on {post.publishDate}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article style={{minHeight: "500px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto" dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}>
          </div>
        </div>
      </div>
    </article>

    <div style={{background: "#f7f7f7", padding: "30px 0"}}>
      <div className="container">
        <row>
          <form className="col-lg-8 col-md-10 mx-auto">
            <div className="form-group">
              <label for="FormControlInput">使用者名稱</label>
              <input type="email" className="form-control" id="FormControlInput"/>
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
        <div className="row">
          <div className="col-lg-9 col-md-10 mx-auto" style={{background: "#F1F1F1", padding: "10px 15px", marginBottom: "20px"}}>
              <h5> title</h5>
              <p>感謝版主</p>
              <p style={{fontSize: "18px", color: "#888888", background: "#E3E3E3", padding: "20px", margin: "0", maxWidth: "550px"}}>版主: 謝謝指教</p>
              <span style={{float: "right", fontSize: "18px", color: "#888888"}}>Hong edited on 2018-01-25 00:25</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-10 mx-auto" style={{background: "#F1F1F1", padding: "10px 15px", marginBottom: "20px"}}>
              <h5> title</h5>
              <p>感謝版主</p>
              <p style={{fontSize: "18px", color: "#888888", background: "#E3E3E3", padding: "20px", margin: "0", maxWidth: "550px"}}>版主: 謝謝指教</p>
              <span style={{float: "right", fontSize: "18px", color: "#888888"}}>Hong edited on 2018-01-25 00:25</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-10 mx-auto" style={{background: "#F1F1F1", padding: "10px 15px", marginBottom: "20px"}}>
              <h5> title</h5>
              <p>感謝版主</p>
              <p style={{fontSize: "18px", color: "#888888", background: "#E3E3E3", padding: "20px", margin: "0", maxWidth: "550px"}}>版主: 謝謝指教</p>
              <span style={{float: "right", fontSize: "18px", color: "#888888"}}>Hong edited on 2018-01-25 00:25</span>
          </div>
        </div>
      </div>
      
    </div>

  </Layout>
)}
export default PostPage

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      subTitle
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      image {
        file {
          url
        }
      }
      author {
        name
      }
      tags
      body {
        childMarkdownRemark {  
          html
        }
      }
    }
  }
`
