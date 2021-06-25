import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {actionAll} from '../Redux/Action';


function FetchData() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.reducerBlog.blog_data);

  useEffect(()=>{
    console.log("test");
    state === [] && dispatch(actionAll());
  },[dispatch, state]);

  return (
    <div>
      
    </div>
  )
}

export default FetchData
