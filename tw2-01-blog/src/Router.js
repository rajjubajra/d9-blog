import { Route, Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Blog from './Page/Blog';

import BlogPost from './Page/BlogPost';
import BlogListByTaxonomy from './Page/BlogListByTaxonomy';
import BlogSearch from './Page/BlogSearch';



function Router() {

  const baseurl = "/d9-blog/themes/tw2-01";

  return (
      <Switch>
        <Route exact path={`${baseurl}`}  component={Home} />
        <Route path={`${baseurl}/about`}  component={About} />
        <Route path={`${baseurl}/contact`} component={Contact} />
        <Route path={`${baseurl}/blog`}component={Blog} />
        <Route path={`${baseurl}/blog-post/:nid`} component={BlogPost} />
        <Route path={`${baseurl}/blogs-by-tag/:tid`} component={BlogListByTaxonomy} />
        <Route path={`${baseurl}/blog-search`} component={BlogSearch} />
      </Switch>
  )
}

export default Router
