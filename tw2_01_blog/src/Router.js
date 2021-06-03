import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Blog from './Page/Blog';
import MenuBar from './componensts/MainMenu/MenuBar';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {actionAll} from './Redux/Action';




function Router() {

  const dispatch = useDispatch();

  useEffect(()=>{
console.log("test");
dispatch(actionAll());

  },[dispatch])


  return (
    <div className="bg-gray-100 min-h-full w-full">
      <BrowserRouter>
        <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
      </Switch>
      </BrowserRouter>
      
      <h1 className="text-5xl">Router...</h1>
    </div>
  )
}

export default Router
