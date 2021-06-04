import BlogListTwo from './Blog/BlogListTwo';
import Tags from '../componensts/Taxonomy/Tags';

function Blog() {
  
  return (
    <div>
      
      <div className="m-10">
        <h1>BLOG POST</h1>
      </div>
      <Tags />
      <BlogListTwo />
      
    </div>
  )
}

export default Blog
