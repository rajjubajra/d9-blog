import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import MenuBar from './componensts/MainMenu/MenuBar';
import {actionAll} from './Redux/Action';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Blog from './Page/Blog';


function Router() {

  const dispatch = useDispatch();



  useEffect(()=>{
    dispatch(actionAll());
  },[dispatch])


  return (
    <div className="bg-gray-100 min-h-full w-full">
      <BrowserRouter>
      <MenuBar />
      <Switch>
        <Route exact to="/" component={Home} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
        <Route to="/blog" component={Blog} />
      </Switch>
      </BrowserRouter>
      
      <h1 className="text-5xl">Router...</h1>
    </div>
  )
}

export default Router
