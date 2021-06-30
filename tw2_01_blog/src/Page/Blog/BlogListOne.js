import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'; 
import ajax from '../../config/ajax';


function BlogListOne({data}) {

  const state = useSelector(state => state.reducerBlog.blog_data.state)

  const updateViewCount = async (nid, totalcount, daycount, timestamp ) =>{
    
    const postViewCounter = {
      "entity_type":[{"value":"node_counter"}],
      "nid": [{"value": `${nid}`}],
      "totalcount": [{"value": `${totalcount}`}],
      "daycount":[{"value": `${daycount}`}],
      "timestamp":[{"value": `${timestamp}`}],
    }
    try{
      const axios = await ajax()// wait for initialized axios object
      const response = await axios.post('/node', postViewCounter)// wait for the POST AJAX request to complete
      console.log('View Count posted :', response.status)
      if(response.status === 201)
      {
        console.log('View Count posted success');
      }
    }catch(e){
      alert(e)
    }
      

  }


  return (
    <div>
      {
        data.length > 0 &&
        data.map(item=>{
          return <ul key={item.nid}>
            <li>
              <Link 
              onClick={() => updateViewCount(item.nid, 999, 55 ,1362281532)}
              to={`/blog-post/${item.nid}`}>{item.title}</Link>
            </li>
          </ul>
        })
      }      

    </div>
  )
}

export default BlogListOne
