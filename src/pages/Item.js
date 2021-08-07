import React from 'react';
import { useHistory } from 'react-router-dom'
import store from '../store';
import { observer } from 'mobx-react';


const Item = observer(() => {
    const history = useHistory()
    const deleteItem = (id) => {
        store.deleteTodo(id)
    }
    const toEdit = (item) => {
        history.push({ pathname: '/detail', state: { item: item } })
    }

    const handleCheck = (id) => {
        store.checkItem(id)
    }
    return (
        <div>
            {store.todos.map((v, i) => {
                return <div key={i}><input type='checkbox' onChange={() => handleCheck(v.id)} checked={v.done} /> {v.id}-{v.content} <button onClick={() => deleteItem(v.id)}>删除</button>
                    <button onClick={() => toEdit(v)}>编辑</button>
                </div>
            })}
        </div>
    );
});

export default Item;