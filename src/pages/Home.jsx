import React from 'react';
import LogoBar from '../components/Common/LogoBar';
import Navbar from '../components/Common/Navbar';
import Sidebar from '../components/Common/Sidebar';



const Home = () => {
    return (
        <div className="wrapper">
            <div className="main-header">
                <LogoBar />
                <Navbar />
            </div>
            <Sidebar />
            <div className="main-panel">
                <div className="content">
                    <div className="page-inner">
                        <div className="page-header">

                            <h1>Hi I, am Santo Bsiwas</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;