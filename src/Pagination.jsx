//Pagination is dividing the returned result or the rendered result into multiple pages to avoid lengthy scrolling
import React, {useState, useEffect} from 'react'

const Pagination = () => {
    const [elements, setElements] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    
    const pageLength = 10;
    // const totalPages = 5000/pageLength;
    const pageNoArray = [0,1,2,3,4,5,6,7,8,9];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(Response=>Response.json())
        // .then(result => console.log(result))
        .then(result => {
        const newElements = result.slice(pageNo*pageLength, pageLength*(pageNo+1));

        setElements(newElements);
        })
    },[pageNo])
  return (
    <>
        <div>Pagination Example</div>
        <ul className='pagination'>
             <div className='mx-auto d-flex'>
                
            <li className={"page-item " +( pageNo===0? 'disabled': '')}>
            <button className="page-link" onClick={()=> setPageNo(p => p-1)} >
                <span>&laquo;</span>
            </button>
            </li>

                {pageNoArray.map((i)=>
                <li className={'page-item ' + (pageNo===i?'active' : ' ')} key={i}>
                    <button className='page-link' onClick={() => setPageNo(i)}>{i+1}</button>
                </li>
                )}
                
                <li className={"page-item " + (pageNo===9? 'disabled': '')}>
                    <button className="page-link" onClick={()=> setPageNo(p => p+1) }>
                        <span>&raquo;</span>
                    </button>
                </li>
            </div>

           
        </ul>
        <div>
            {elements.map((element,i)=> 
            <div key={i}  >
                <h2>{element.title}</h2>
            </div>
            
            )}
        </div>
    </>
  )
}

export default Pagination