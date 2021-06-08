import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {baseurl} from '../config/baseurl';

function BlogPost() {

  let {nid} = useParams();
  
  const state = useSelector(state => state.reducerBlog.blog_data );

  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    const postComment ={
      "_links":{
        "type":{"href": `${baseurl.URL}/resty/type/comment/comment`}
      },
        "entity_id":[{"target_id": `${nid}`}],
        "subject":[{"value":"Comment title"}],
        "entity_type":[{"value":"node"}],
        "comment_type":[{"target_id":"comment"}],
        "field_name":[{"value":"comment"}],
        "comment_body":[{"value":"Body text for the comment.",
                      "basic_html":"basic_html"}],
    }
    console.log(postComment);
    
    axios({
      url: `${baseurl.URL}/comment/`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': `${baseurl.URL}/session/token`
      },
      data: JSON.stringify(postComment)
    })
    .then(res => console.log("success", res))
    .catch(err => console.log("Err", err))   
  }
  console.log(comment);

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

            <div className="mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <textarea 
              className="mb-3 border border-gray-600 h-36 p-3"
              name="comment"
              onChange={(e)=> setComment(e.target.value)}
              value={comment}
              placeholder="Comment.."
              ></textarea>
              <input 
              className="border border-gray-600"
              type="submit"  
              name="submit" 
              value="Submit" />
            </form>
            </div>
          </div>
      })
    }
    </div>
  )
}

export default BlogPost