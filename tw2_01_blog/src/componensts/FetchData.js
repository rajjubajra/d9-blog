import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {actionAll} from '../Redux/Action';


function FetchData() {

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("test");
    dispatch(actionAll());
  },[dispatch]);

  return (
    <div>
      
    </div>
  )
}

export default FetchData
