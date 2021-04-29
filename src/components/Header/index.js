import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>đây là header</h1>
            <Link to='/'>Home</Link>
            <Link to='/courses/frontend'>Course List</Link>
            <Link to='/course/onl'>Course Detail</Link>
        </div>
    )
}
