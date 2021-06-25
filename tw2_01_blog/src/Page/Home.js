import BlogListOne from './Blog/BlogListOne';
import BlogListTwo from './Blog/BlogListTwo';
import FetchData from '../componensts/FetchData';


function Home() {

  console.log("HOME PAGE")
  return (
    <div>
      <FetchData />
      <h1>HOME PAGE</h1>
      <BlogListOne />
      <BlogListTwo />
    </div>
  )
}

export default Home