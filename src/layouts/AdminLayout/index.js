import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminLayout({children}) {
    return (
        <div className='d-flex row'>
            {/* Sidebar */}
            <div className='col-4 d-flex flex-column'>
                <h3>Cyberlearn</h3>
                <Link to='/admin/courses'>Courses</Link>
                <Link to='/admin/users'>Users</Link>
            </div>
            <div className='col-8'>
                {children}
            </div>
        </div>
    )
}
