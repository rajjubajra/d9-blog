import {Link} from 'react-router-dom';

function BlogCard({title, body_1, nid, field_tags, created }) {
  
  return (
    <div className="p-5 border-1 border m-5 border-gray-300">
        <div className="mb-4">
          <h1 className="text-2xl">{title}</h1>
          <div className="my-2 flex justify-end font-thin">Date: {created}</div>
          <div>
            <div dangerouslySetInnerHTML={{__html: body_1 + '...'}} />
          </div>
        </div>
        <div className="flex flex-row">
          <Link className="border border-gray-600 px-5 py-1" to={`/blog-post/${nid}`}>
              More</Link>
          <p className="ml-10">Tag: {field_tags}</p>
        </div>
    </div>
  )
}

export default BlogCard
