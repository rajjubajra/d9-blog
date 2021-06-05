import {useParams} from 'react-router-dom';
import BlogListTwo from './Blog/BlogListTwo';


function BlogListByTaxonomy() {

  let {tid} = useParams();
  console.log({tid});

  return (
    <BlogListTwo tid={tid} />
  )
}

export default BlogListByTaxonomy