import React, { useState } from 'react'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    
    const [count, setCount] = useState(users.length);
    const renderPhrase = (number) => {
        
        if(count === 2 || count === 3 || count === 4) {
            return <span>человека тусанут</span>
        } else {
            return <span>человек тусанет</span>
        }
    }
    const formatCount = () => {
        return count === 0 ? <h2>Никто с тобой не тусанет</h2> : 
        <h2>{count} {renderPhrase()} с тобой сегодня</h2>;
    };
    const getBadgeClasses = () => {
        let classes = "badge ";
        classes += count === 0 ? "bg-danger" : "bg-primary";
        return classes
    };
    const renderTableHead = () => {
        return <thead>
            <tr>
                <th>Имя</th>
                <th>Качества</th>
                <th>Профессия</th>
                <th>Встретился, раз</th>
                <th>Оценка</th>
                <th></th>
            </tr>
        </thead>
    };
    const renderUsers = () => {
        return users.map((user) => {
            return (<tr key={user._id}>
                <td>{user.name}</td>
                <td>    
                {user.qualities.map((item) => {
                    return <span 
                    key={item._id}
                    className={`badge bg-${item.color}`}
                    >{item.name}</span>
                })}               
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    <button className="btn btn-danger"
                     onClick={() =>handleDelete(user)}
                    >
                    delete
                    </button>
                </td>
            </tr>)
        })
    }
     const handleDelete = (userId) => {
         setCount((prevState) => prevState - 1)
         setUsers((prevState) => prevState.filter((user) => user !== userId));
    }
    


    return (
        <>
        <span className={getBadgeClasses()}>{ formatCount(users.length) }</span>
        <table className="table">
            {renderTableHead()}
            <tbody>
                {renderUsers()}
            </tbody>
        </table>

        </>
    )
}

export default Users;