import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'; 


function BlogListOne({data}) {

  const state = useSelector(state => state.reducerBlog.blog_data.state)

  const updateViewCount = async (nid, totalcount, daycount, timestamp ) =>{
  
      function nodeExists(nid){
        return state.some(function(el){
          return el.nid === nid;
        })
      }

      console.log("NID EXITS", nodeExists);

      let today = new Date();
      console.log(today);

      function timestampExists(){
        return state.some(function(el){
          return el.timestamp === today;
        })
      }
    console.log("today", timestampExists);

  }


  return (
    <div>
      {
        data.length > 0 &&
        data.map(item=>{
          return <ul key={item.nid}>
            <li>
              <Link 
              onClick={updateViewCount(item.nid, item.totalcount, item.daycount, item.timestamp)}
              to={`/blog-post/${item.nid}`}>{item.title}</Link>
            </li>
          </ul>
        })
      }      

    </div>
  )
}

export default BlogListOne
