import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import BlogCard from './BlogCard';


function BlogListTwo({tid}) {

  const data = useSelector(state=>state.reducerBlog.blog_data);
  const dataLength = data.length + 5;
  const tagId = tid ? tid : null;
  console.log(tagId);

   //** PAGENATION - 'npm react-paginate */
  const numberOfContent = 10;
  const [pages, setPages] = useState([]);
  const [pageNumber, SetPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(numberOfContent);

  useEffect(()=>{
    setPages(data.slice(currentPage, lastPage))
    setPageCount()
  },[data, currentPage, lastPage])
  
  console.log("Pages", currentPage, lastPage);

  const setPage = (clickType) =>{

    /** click Type - Next or Prev */
    switch(clickType){

      case 'next':
          if(currentPage >= (dataLength - numberOfContent)){
            setCurrentPage(currentPage)
            setLastPage(lastPage)
          }else{
            setCurrentPage(currentPage + numberOfContent)
            /** Calcultion of LastPage for odd number dataLength  */
            /** eg Math.floor(105/10 + 105 % 10) | answer is 15 */
            let endPage = Math.floor(dataLength/numberOfContent + dataLength % numberOfContent)

            setLastPage(lastPage + numberOfContent)
          } 
          SetPageNumber(pageNumber + 1);
      break;
      
      case 'prev':
        if(currentPage === 0){
          setCurrentPage(currentPage) 
          setLastPage(lastPage)
        }else{
          setCurrentPage(currentPage - numberOfContent) 
          setLastPage(lastPage - numberOfContent)
        }
        SetPageNumber(pageNumber - 1)
      break;
      
      default:
        return '';
    }

  }

  return (
    <div>
      {tagId && <h2 className="m-5">Tag Id: {tid}</h2>}
      {
        pages.length > 0 &&
        pages.map((item, index)=> {
          // taxonomy Id comma separated value in to array
          let tagArr = item.field_tags_1.split(',');
          return tagId === null ?
          <BlogCard 
            key={item.nid}
            title={item.title}
            nid={item.nid}
            body_1={item.body_1}
            field_tags={item.field_tags}
            created={item.created}
            index={index}
          />
          : tagArr.includes(tagId) && 
          <BlogCard 
            key={item.nid}
            title={item.title}
            nid={item.nid}
            body_1={item.body_1}
            field_tags={item.field_tags}
            created={item.created}
            index={index}
          />      
        })

      }   

      <div className="flex justify-center">
        {
          pageNumber > 1 && <div onClick={() => setPage("prev")} className="ml-3">Prev</div>
        }
        <div>- Page {pageNumber}-</div> 
        <div onClick={() => setPage("next")} className="mr-3">Next</div>
        
      </div>
      
    </div>
  )
}

export default BlogListTwo
