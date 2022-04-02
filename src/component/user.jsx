import React from "react"
import {getClassesQualities} from "./qualitie"
import {BookMark} from "./bookMark"

export const User = props => {
    const { user } = props

    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.qualities.map(qualities => <span className={getClassesQualities(qualities)}>{qualities.name}</span>)}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td><BookMark/></td>
            <td><button className='btn btn-danger' onClick={() => props.onDelete(user._id)}>delete</button></td>
        </tr>
    )
}