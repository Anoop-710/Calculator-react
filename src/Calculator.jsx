import React from 'react'

function Calculator() {
    const [input, setInput] = React.useState('');
    const [history, setHistory] = React.useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleClick = (event) => {
        setInput(input+ event.target.value);
    }

    const calculateResult = () => {
        const result = eval(input);
        setInput(result);
        if(history.length > 5){
            history.splice(0,1);
        }
        history.push(`${input} = ${result}`);
    }
  return (
    <div >
        <h1 >Calculator</h1>
        {history.map((h,i)=>
            <li key={i} onClick={()=>setInput(h)}>{h}</li>)
        } 
        <div>
            <input  type="text"  value={input} onChange={handleChange}/>
            <button onClick={calculateResult}>Calculate</button>
            <button onClick={()=>setInput('')}>Clear</button>
        </div>
        <div>
            <button value='7' onClick={handleClick} >7</button>
            <button value='8' onClick={handleClick} >8</button>
            <button value='9' onClick={handleClick} >9</button>
            <button value='+' onClick={handleClick} >+</button>
        </div>
        <div>
            <button value='4'onClick={handleClick} >4</button>
            <button value='5'onClick={handleClick} >5</button>
            <button value='6'onClick={handleClick} >6</button>
            <button value='-'onClick={handleClick} >-</button>
        </div>
        <div>
            <button value='1'onClick={handleClick} >1</button>
            <button value='2'onClick={handleClick} >2</button>
            <button value='3'onClick={handleClick} >3</button>
            <button value='*'onClick={handleClick} >*</button>
        </div>
        <div>
            <button value='0'onClick={handleClick} >0</button>
            <button value='.'onClick={handleClick} >.</button>
            <button value='/'onClick={handleClick} >/</button>
            <button value='='onClick={calculateResult} >=</button>
        </div>
    </div>
    
    
  )
}

export default Calculator