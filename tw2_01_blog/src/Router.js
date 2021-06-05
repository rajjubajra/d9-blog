import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Blog from './Page/Blog';
import MenuBar from './componensts/MainMenu/MenuBar';
import BlogPost from './Page/BlogPost';
import BlogListByTaxonomy from './Page/BlogListByTaxonomy';



function Router() {



  return (
    <div className="bg-gray-100 min-h-full w-full">
      <BrowserRouter>
        <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-post/:nid" component={BlogPost} />
        <Route path="/blogs-by-tag/:tid" component={BlogListByTaxonomy} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router
