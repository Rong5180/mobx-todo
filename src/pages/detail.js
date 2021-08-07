import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import store from '../store';

const Detail = (props) => {
    let item=props.location.state.item

    const [con, setCon] = useState(item.content)
    const history = useHistory()
    const editItem = () => {
        store.editTodo(item.id,con)
        history.push('/')
    }
    return (
        <div>
            id:{item.id}
            <div>
                <input value={con} onChange={(e) => setCon(e.target.value)} /><button onClick={editItem}>添加</button>
            </div>
        </div>

    );
};

export default Detail;