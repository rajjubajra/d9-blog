import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import ajax from '../config/ajax';

function BlogPost() {

  let {nid} = useParams();
  
  const state = useSelector(state => state.reducerBlog.blog_data );

  const [comment, setComment] = useState('');
  const [commentTitle, setCommentTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const postComment ={

        "entity_id":[{"target_id": `${nid}`}],
        "subject":[{"value": `${commentTitle}`}],
        "entity_type":[{"value":"node"}],
        "comment_type":[{"target_id":"comment"}],
        "field_name":[{"value":"comment"}],
        "comment_body":[{"value": `${comment}`,
                      "basic_html":"basic_html"}]

    }
    try{
      const axios = await ajax()// wait for initialized axios object
      const response = await axios.post('/comment', postComment)// wait for the POST AJAX request to complete
      console.log('Node created :', response.Object.status)
    }catch(e){
      alert(e)
    }
  }
  
  console.log(comment, commentTitle);
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
              <h1>Comment Form</h1>
              <div>
                <input type="text"
                  className="mb-3 border border-gray-600 p-3"
                  name="title"
                  onChange={(e)=>setCommentTitle(e.target.value)}
                  value={commentTitle}
                  placeholder="Title"
                />
              </div>
              <div>
                <textarea 
              className="mb-3 border border-gray-600 h-36 p-3"
              name="comment"
              onChange={(e)=> setComment(e.target.value)}
              value={comment}
              placeholder="Comment.."
              ></textarea>
              </div>
              
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