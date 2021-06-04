import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {actionAll} from '../Redux/Action';
import BlogListOne from './Blog/BlogListOne';
import BlogListTwo from './Blog/BlogListTwo';


function Home() {

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("test");
    dispatch(actionAll());
  },[dispatch]);

  return (
    <div>
      home
      <h1>HOME PAGE</h1>
      <BlogListOne />
      <BlogListTwo />
    </div>
  )
}

export default Home