import React from 'react'

const StaffPreview = ({ staff }) => {
    return (
        <div className='staff-preview'>
            <img src={`${staff.avatar}?u=${staff.id}`} />
            <p className='staff-name'>{staff.firstname} {staff.lastname}</p>
            <p className='staff-job'>{staff.job}</p>
        </div>
    )
}

export default StaffPreview
