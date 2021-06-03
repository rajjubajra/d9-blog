import {useSelector} from 'react-redux';


function Blog() {

  const state = useSelector(state=>state.reducerBlog.blog_data);
  console.log(state);

  return (
    <div>
      BLog page
    </div>
  )
}

export default Blog
