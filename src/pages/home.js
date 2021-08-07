import React, { useState } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import Item from './Item';
import Footer from './Footer';

const Home = observer(() => {
    const [inputValue, setInputValue] = useState('')
    const handleTodos = () => {
        if(!inputValue){alert('输入不能为空');return}
        let item = {}
        item.id = store.todos.length + 1
        item.content = inputValue
        item.done = false
        store.addTodo(item)
        setInputValue('')
    }
    return (
        <div>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} /> <button onClick={handleTodos}>    添加</button>
            <Item />
            <Footer />
        </div>
    );
});

export default Home;