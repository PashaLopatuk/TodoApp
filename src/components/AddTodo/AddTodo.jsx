import React, { useState } from 'react';
import './AddTodoStyles.css';

function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('');
    

    function saveTodo () {
        if (value !== '') {
            let newTodo = [...todo, {
                id: String(Date.now()).slice(8, 12),
                // id: 4,
                title: value,
                status: true,
            }]
            setTodo(newTodo)
            localStorage.setItem('TodoList',  JSON.stringify(newTodo));
            setValue('')
        }
    }

    return ( 
        <div className='AddTodo'>
            <div className='create-form'>
                <input className='create-input' placeholder='Enter task' value={value} onChange={ (e) => setValue(e.target.value) } />
                <button className='create-button' onClick={()=>saveTodo()}>Save</button>
            </div>
        </div>
    )
}

export default AddTodo;