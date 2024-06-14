import React from 'react'
import Navbar from './components/navbar'

const Layout = (props) => {
    return (
        <React.Fragment>

            {/* Navbar Content Start */}
            <Navbar />
            {/* Navbar Content End */}

            {/* All Page Content */}
            <div className='container'>
                {props.children}
            </div>
            {/* All Page Content */}

        </React.Fragment >
    )
}

export default Layout