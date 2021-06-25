import React from 'react';
import {Link} from 'react-router-dom';


function BlogListOne({data}) {

  return (
    <div>
      {
        data.length > 0 &&
        data.map(item=>{
          return <ul key={item.nid}>
            <li>
              <Link to={`/blog-post/${item.nid}`}>{item.title}</Link>
            </li>
          </ul>
        })
      }      

    </div>
  )
}

export default BlogListOne
