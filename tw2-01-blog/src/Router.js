import { Route, Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Blog from './Page/Blog';

import BlogPost from './Page/BlogPost';
import BlogListByTaxonomy from './Page/BlogListByTaxonomy';
import BlogSearch from './Page/BlogSearch';



function Router() {

  return (
      <Switch>
        <Route exact path="/d9-blog/themes/tw2-01" component={Home} />
        <Route path="/d9-blog/themes/tw2-01/about" component={About} />
        <Route path="/d9-blog/themes/tw2-01/contact" component={Contact} />
        <Route path="/d9-blog/themes/tw2-01/blog" component={Blog} />
        <Route path="/d9-blog/themes/tw2-01/blog-post/:nid" component={BlogPost} />
        <Route path="/d9-blog/themes/tw2-01/blogs-by-tag/:tid" component={BlogListByTaxonomy} />
        <Route path="/d9-blog/themes/tw2-01/blog-search" component={BlogSearch} />
      </Switch>
  )
}

export default Router
