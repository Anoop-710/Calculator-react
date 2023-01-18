import React from 'react'

const Todo = () => {
    const [items, setItems] = React.useState([{text: 'hello', done: false}]);

   

    const handleSubmit = (e) =>{
        e.preventDefault();
        const todo = (e.target.elements.todo.value);
        setItems([...items, {text: todo, done: false}]);
        // console.log(e.target.elements.todo.value);
        e.target.elements.todo.value = "";
        
    }

    const handleDelete = (index) => {
        const updatedToDos = [...items];
        updatedToDos.splice(index, 1);
        setItems(updatedToDos);
    }

    const handleDone = (index) => {
        const updatedToDos = [...items];
        updatedToDos[index].done = !updatedToDos[index].done;
        setItems(updatedToDos);
    }
  return (
    <div style={{padding: '25%', position:'fixed'}}>
        <h1 className='display-1 text-center'>Todo List</h1>
        <form className='d-flex gap-4' onSubmit={handleSubmit}>
            <input type="text" name='todo' placeholder='Enter to-do text' className='form-control w-72'  />
            <button type='submit' className='btn btn-dark' >Add Todo</button>
        </form>
        <div>
            <h2>Current Todos:</h2>
            <ul className='list-group'>
                {items.map((item,i)=>
                    <li key={i} className="list-group-item">
                        <div style={{float: "left", textDecoration: item.done? 'line-through': 'none'}}>
                        {item.text}
                        </div>
                        <button style={{float: "right"}} className={'btn ' + (item.done? 'btn-secondary': 'btn-success')} onClick={()=>handleDone(i)}>{item.done?'undo':'done'}</button>
                        <button style={{float: "right"}} className="btn btn-danger mx-2" onClick={handleDelete}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Todo