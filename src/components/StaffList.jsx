import React from 'react'
import StaffPreview from './StaffPreview'
const StaffList = ({ staffList }) => {
    return (
        <div className='staff-list'>
            {staffList.map(staff => (<StaffPreview staff={staff} key={staff.id} />))}
        </div>
    )
}

export default StaffList
