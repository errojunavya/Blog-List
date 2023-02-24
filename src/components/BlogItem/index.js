// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogDetails} = props
  const {title, description, publishedDate} = eachBlogDetails

  return (
    <li className="blog-item-container">
      <div className="text-container">
        <h1 className="heading">{title}</h1>
        <p className="para">{description}</p>
      </div>
      <div>
        <p className="para">{publishedDate}</p>
      </div>
    </li>
  )
}
export default BlogItem
