import React from "react"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"

const IndexPage = (props) => {

  const head = props.data.allContentfulHead.edges[0].node
  const posts = props.data.allContentfulPost.edges
  const postBoby = posts.map((post)=><PostPreview key={post.node.slug} data={post.node}/>)

  return (
  <Layout>
    <header className="masthead" style={{backgroundImage: `url('${head.image.file.url}')`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>{head.title}</h1>
              <span className="subheading">{head.subTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {postBoby}
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>

    <hr/>
  </Layout>
)}

export default IndexPage

export const indexQuery = graphql`
query indexQuery {
  allContentfulHead {
    edges {
      node {
        image {
          file {
            url
          }
        }
        title
        subTitle
      }
    }
  }
  allContentfulPost {
    edges {
      node {
        slug
        title
        subTitle
        publishDate(formatString: "MMMM Do, YYYY")
        author {
          name
        }
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
}
`
