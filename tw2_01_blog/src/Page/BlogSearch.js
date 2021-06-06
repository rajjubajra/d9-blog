import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function BlogSearch() {

  const state = useSelector(state => state.reducerBlog.blog_data);

  
  const [searchWord, setSearchWord] = useState();
  const [result, setResult] = useState([]);

  useEffect(()=>{
    /** SERACH item body and title */
    state.length > 0 && searchWord &&
    setResult(state.filter((item)=> 
    item.body.toLowerCase().includes(searchWord.toLowerCase()) ||
    item.title.toLowerCase().includes(searchWord.toLowerCase())
    ))
  },[searchWord, state])

  console.log(searchWord, result, state);

  return (
    <div>
    <div className="m-5">
      <h1 className="text-2xl">Search</h1>
      <input 
      type="text" 
      onChange={(e)=>setSearchWord(e.target.value)} 
      value={searchWord} />
    </div>
    {
      result.length > 0 &&
      result.map((item)=>{
        let body = item.body.substring(0,150);
        return <div className="m-10">
          <h2 className="text-2xl">{item.title}</h2>
          <div dangerouslySetInnerHTML={{__html: body}} />
          <Link to={`/blog-post/${item.nid}`}>Read</Link>

        </div>
      })
    }
    </div>
  )
}

export default BlogSearch
