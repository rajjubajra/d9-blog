import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


function BlogListTwo() {

  const data = useSelector(state=>state.reducerBlog.blog_data);

  return (
    <div>
      {
        data.length > 0 &&
        data.map(item=>{
          return <ul className="p-5 border-1 border m-5 border-gray-300" key={item.nid}>
            <li>
              <div className="mb-4">
                <h1 className="text-2xl">{item.title}</h1>
                <div>
                  <div dangerouslySetInnerHTML={{__html: item.body_1 + '...'}} />
                </div>
              </div>
              <Link className="border border-gray-600 px-5 py-1" to={`/blog-post/${item.nid}`}>
              More</Link>
            </li>
          </ul>
        })
      }      
    </div>
  )
}

export default BlogListTwo
