import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

function BlogPost() {

  let {nid} = useParams();
  console.log("NODE ID - ",nid);
  const state = useSelector(state => state.reducerBlog.blog_data );


  return (
    <div>
    { state.length > 0 &&
      state.map(item=>{
        return item.nid === nid && 
        <div className="p-10 m-5" key={item.nid}>
          <h1 className="text-3xl my-5">{item.title}</h1>
          <div>
            <img src={item.field_image} alt={item.field_image_1} />
          </div>
          <div>
            <div dangerouslySetInnerHTML={{__html: item.body}} />
          </div>
        </div>
      })
    }
    </div>
  )
}

export default BlogPost