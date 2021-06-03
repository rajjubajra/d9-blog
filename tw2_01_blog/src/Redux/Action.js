import {actionTypes} from './ActionTypes';
import axios from "axios";
import { baseurl } from '../config/baseurl';


export const actionAll = () => {
 
  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  /**
   * REMOTE SITE
   * Install Module used
   * https://www.drupal.org/project/rest_menu_items
   * 
   * Enable : Rest UI : Menu Item to GET 
   * Set Permission : Access GET on Menu items per menu resource
   * 
   * 
   */
  
  /**
   * if npm run on localhost:3000
   * fetch data from local json file.
   */
  /** MAIN NAVIGATION */
  const NavLocal = './data/mainnav.json';
  const NavRemote = `${baseurl.URL}/api/menu_items/main`;
  const NAV = window.location.origin === 'http://localhost:3000' 
                    ? NavLocal
                    : NavRemote;

  console.log(NAV);
  /** MULTIPLE CHOICE QUIZ */
  const BlogLocal = './data/blog.json';
  const BlogRemote = `${baseurl.URL}/rest/blog`;
  const Blog = window.location.origin === 'http://localhost:3000' 
                    ? BlogLocal
                    : BlogRemote;

  console.log(Blog);
  return function (dispatch) {

    /** NAVIGATION */
    dispatch({
      type: actionTypes.MAIN_NAV_START_FETCHING
    })
    const reqNav = axios.get(NAV, headers)
    reqNav.then((res) => {
        console.log("action",res.data)
        dispatch({
          type: actionTypes.MAIN_NAV_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.MAIN_NAV_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })

    /** BLOG */
    dispatch({
      type: actionTypes.BLOG_START_FETCHING
    })
    const reqBlog = axios.get(Blog, headers)
    reqBlog.then((res) => {
        console.log("action",res.data)
        dispatch({
          type: actionTypes.BLOG_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }

}//ActionAll closed