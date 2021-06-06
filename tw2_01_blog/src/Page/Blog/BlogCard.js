import {Link} from 'react-router-dom';

function BlogCard({title, body_1, nid, field_tags, created }) {

  /**
   *  --- Using getDate() ---
   *  var dt = new Date('December 25, 1995 23:15:30');
   *  var day = dt.getDate();
   *  console.log(day); // 25
   */

  let dt = new Date(created);
  //console.log("DATE?", dt.getFullYear());
  const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  return (
    <div className="p-5 border-1 border my-5 border-gray-300">
        <div className="mb-4">
          <h1 className="text-2xl">{title}</h1>
          <div className="my-2 flex justify-end font-thin">
            Date:{dt.getDate()} {monthArr[dt.getMonth()]}, {dt.getFullYear()}</div>
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