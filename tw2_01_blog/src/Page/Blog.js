import BlogListTwo from './Blog/BlogListTwo';
import FetchData from '../componensts/FetchData';

function Blog() {
  
  return (
    <div>
      <FetchData />
      <div className="m-10">
        <h1>BLOG POST</h1>
      </div>
      
      <BlogListTwo />
      
    </div>
  )
}

export default Blog
