import {useSelector} from 'react-redux';

function Tags() {
  
  const state = useSelector(state => state.reducerTaxonomy.taxonomy_data);

  return (
    <div>
      <h1 className="ml-3 p-2">Taxonomy</h1>
      <div className="flex flex-row">
      {
        state.length > 0 &&
        state.map(item=>{
          let tagname = item.name
          return <div className="m-1 p-2" key={item.tid}>{tagname.substring(0,15)}</div>
        })
      }
      </div>
    </div>
  )
}

export default Tags