import React, { useState } from 'react';
import './TodoListStyles.css';
import './DoneStyle.css';

function TodoList({ todo, setTodo}) {

    const deleteButtonIcon = require('../icons/bin.png');
    const editButtonIcon = require('../icons/edit.png');

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState();

    // localStorage.setItem('fisrt', 42);

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id!==id);
        setTodo(newTodo)
    }

    function statusTodo(id, val) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status;
            }

            return item; 
        })
        console.log(todo);
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        console.log('fgd')
        setValue(title)
        setEdit(id)
        console.log(edit)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item
        })
        localStorage.setItem('TodoList', JSON.stringify(newTodo));
        setTodo(newTodo)
        setEdit('')
    }

    return (
        <div className='TodoList'>
            {
                todo.map( item => (
                    <div className='item' key={item.id}>
                        {
                            edit === item.id ? 
                                <div className='case edit'>
                                    <input  value={value} onChange={(e)=>setValue(e.target.value)}/>
                                    <button onClick={()=> saveTodo(item.id)}>Save</button>
                                </div> 
                            :
                                <div className='case'>
                                    <input className='checked' type="checkbox" onChange={()=>statusTodo(item.id)} />
                                    <button className={item.status ? 'title' : 'done'} onClick={()=>editTodo(item.id, item.title)}> { item.title } </button>
                                    {
                                        item.status === false ?
                                            () => {
                                                import('./DoneStyle.css')
                                            }
                                        :
                                            <></>
                                    }
                                    <div className="buttons-case">

                                        <button className='delete-button' onClick={()=>deleteTodo(item.id) }>
                                            <img src={deleteButtonIcon} alt="" />
                                        </button>

                                        <button className='edit-button' onClick={()=>editTodo(item.id, item.title)}>
                                            <img src={editButtonIcon} alt="" />
                                        </button>

                                    </div>

                                </div>
                        }
                        
                    </div>
                ))
            }
        </div>
    );
}

export default TodoList;