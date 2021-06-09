import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {baseurl} from '../config/baseurl';
import BlogPostCommentForm from './Blog/BlogPostCommentForm';

function BlogPost() {

  let {nid} = useParams();
  
  const state = useSelector(state => state.reducerBlog.blog_data );

  const [ logInStatus, setLogInSatus ] = useState(false);

  useEffect(()=>{
    /** Logged status returns 1 or 0 value */
    let status = `${baseurl.URL}/user/login_status?_format=json`;
    setLogInSatus( status === 1 ? true : false);
  },[])



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

            <div className={`${logInStatus ? 'block':'hidden'}`}>

              <BlogPostCommentForm nid={nid} />
              
            </div>
            <div className={`${logInStatus ? 'hidden' : 'block mt-10'}`}> 
              <p>Please Login for comment</p>
            </div>

          </div>
      })
    }
    </div>
  )
}

export default BlogPost