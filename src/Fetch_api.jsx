import React from 'react'

const Fetch_api = () => {

    const [apiData, setApiData] =React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(data => data.json())
            .then(response =>{
                setApiData(response);
                // console.log(response);
                setLoading(false);
            })
        },[3000])
        
    },[])
  return (
    <>
    <div>Fetch_api</div>
    <div>
        {loading? <h1>Loading</h1>:  <div>
            {apiData.map((data, i) => 
                <div key={i}>
                    {/* <h2>{JSON.stringify(data)}</h2> */}
                    <li>{data.website}</li>
                </div>
            )}
        </div>}
       
        
    </div>    
    </>
  )
}

export default Fetch_api