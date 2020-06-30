import React, { Component } from 'react'
import data from '../data/staff.json'
import StaffList from '../components/StaffList'
class HomePage extends Component {
    state = {
        staffList: data
    }
    render() {
        const { staffList } = this.state
        return (
            <div className='home-page container'>
                <h1 className='header'>Fintek.co.il</h1>
                <section className='about-us'>
                    <div className='content-container'>
                        <h2 className='about-us-title'> Execution <br></br> is <br></br> everything</h2>
                        <div className="content">
                            <p className='content-title'>Who we are</p>
                            <p className='content-paragraph'>
                                We are a team of creatively diverse,
                                driven, and innovative individuals
                                working to achieve the best we can.
                    </p>
                        </div>
                        <div className="content">
                            <p  className='content-title'>Our mission</p>
                            <p className='content-paragraph'>
                                We want to give our clients the best
                                and help their businesses succeed.
                                Together we can make you inspire
                                to growth even more than where
                                you are today
                    </p>
                        </div>
                    </div>
                    <div className='staff-container'>
                        <StaffList staffList={staffList.splice(0, 3)} />
                        <StaffList staffList={staffList.splice(0, 3)} />
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage