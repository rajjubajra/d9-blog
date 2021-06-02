import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionAll} from './Redux/Action';

function Router() {

  const dispatch = useDispatch();



  useEffect(()=>{
    dispatch(actionAll());
  },[dispatch])


  return (
    <div>
      <h1>Router...</h1>
    </div>
  )
}

export default Router
