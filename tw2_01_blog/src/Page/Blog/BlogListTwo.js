import {useSelector} from 'react-redux';
import BlogCard from './BlogCard';


function BlogListTwo({tid}) {

  const data = useSelector(state=>state.reducerBlog.blog_data);
  const tagId = tid ? tid : null;
  console.log(tagId);

  return (
    <div>
      {tagId && <h2 className="m-5">Tag Id: {tid}</h2>}
      {
        data.length > 0 &&
        data.map(item=> {
          // taxonomy Id comma separated value in to array
          let tagArr = item.field_tags_1.split(',');
          return tagId === null ?
          <BlogCard 
            key={item.nid}
            title={item.title}
            nid={item.nid}
            body_1={item.body_1}
            field_tags={item.field_tags}
            created={item.created}
          />
          : tagArr.includes(tagId) && 
          <BlogCard 
            key={item.nid}
            title={item.title}
            nid={item.nid}
            body_1={item.body_1}
            field_tags={item.field_tags}
            created={item.created}
          />
        })
      }      
    </div>
  )
}

export default BlogListTwo
