const { actionTypes } = require('./ActionTypes');


/** NAVIGATION */
const initalStateNav = {  
  nav_fetching: false,
  nav_fetched: false,
  nav_fetch_error: '',
  nav_data: [],
  nav_dataLength: 0,
}

export const reducerMainNav = (state = initalStateNav, action) => {

  switch (action.type) {

    case actionTypes.MAIN_NAV_START_FETCHING:
      return {
        fetching: true,
        nav_data: []
      }
    case actionTypes.MAIN_NAV_FETCHED:
      return {
        nav_data: action.data,
        nav_fetched: true,
        nav_dataLength: action.data.length
      }
    case actionTypes.MAIN_NAV_FETCH_ERROR:
      return {
        nav_fetched: false,
        nav_fetching: false,
        nav_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// MAIN NAV CLOSED



/** BLOG */
const initialStateBlog = {
 blog_fetching: false,
 blog_fetched: false,
 blog_fetch_error: '',
 blog_data: [],
 blog_dataLength: 0
}

export const reducerBlog = (state = initialStateBlog, action) => {
  
  switch(action.type){

    case actionTypes.BLOG_START_FETCHING:
      return {
        blog_fetching: true,
        blog_data: []
      }
    case actionTypes.BLOG_FETCHED:
      return {
        blog_data: action.data,
        blog_fetched: true,
        blog_dataLength: action.data.length
      }
    case actionTypes.BLOG_FETCH_ERROR:
      return {
        blog_fetched: false,
        blog_fetching: false,
        blog_fetch_error: action.error
      }
      /** default state */
      default:
        return state;
  }
}


