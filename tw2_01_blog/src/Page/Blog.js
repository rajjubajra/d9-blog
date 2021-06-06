import BlogListTwo from './Blog/BlogListTwo';
import Tags from '../componensts/Taxonomy/Tags';
import FormSelectDate from './Blog/FormSelectDate';
import {useSelector} from 'react-redux';

function Blog() {
  const YearMonth = useSelector(state => state.reducerBlogYearMonth.blog_YearMonth);
  
  return (
    <div className="m-10">
      
      <div className="my-10">
        <h1>BLOG POST</h1>
      </div>
      <div>
        <FormSelectDate />
      </div>
      <Tags />
      {
        YearMonth === null ?
        <BlogListTwo />
        :
        <h2>Year Month</h2>
      }
      
      
    </div>
  )
}

export default Blog
