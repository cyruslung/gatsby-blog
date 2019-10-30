import React from "react"

const PostPreview = (props) => {
  const post = props.data
  return (
  <>
    <div className="post-preview">
      <a href={`blog/${post.slug}`}>
          <h2 className="post-title">
          {post.title}
          </h2>
          <h3 className="post-subtitle">
          {post.subTitle}
          </h3>
      </a>
      <p className="post-meta">Posted by {post.author.name} on {post.publishDate}</p>
    </div>
    <hr/>
  </>
)}
export default PostPreview

