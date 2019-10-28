import React from "react"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"



const IndexPage = () => (
  <Layout>
  
    <header className="masthead" style={{backgroundImage: "url('../img/home-bg.jpg')"}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Clean Blog</h1>
              <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <PostPreview/>
          <PostPreview/>
          <PostPreview/>
          <PostPreview/>
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>

    <hr/>

  </Layout>
)

export default IndexPage
