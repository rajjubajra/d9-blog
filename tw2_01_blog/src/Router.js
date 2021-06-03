import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionAll} from './Redux/Action';


function Router() {

  const dispatch = useDispatch();



  useEffect(()=>{
    dispatch(actionAll());
  },[dispatch])


  return (
    <div className="bg-gray-100 min-h-full w-full">
      
      <h1 className="text-5xl">Router...</h1>
    </div>
  )
}

export default Router
