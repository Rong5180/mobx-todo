import React from 'react';
import store from '../store';
import { observer } from 'mobx-react';


const Footer = observer(() => {
    let done = 0
    store.todos.map(v => {
        v.done && done++
    })
    return (
        <div>
            已完成：{done}/总共：{store.todos.length} <button onClick={()=>store.deleteDone()}>删除已完成</button>
        </div>
    );
});

export default Footer;