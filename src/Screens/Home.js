import React from 'react'
import { Link, } from 'react-router-dom'
import "./Home.scss"
function Home({person}) {
    
    return (
        <div className="home">
    <div className="container home-main mx-auto ">
        <div className="row  home-main-box d-flex justify-content-center align-items-center flex-column p-5">
        <img src="/Images/Register.png" alt="iconss" width="550px" height="300px"/>
            <div className="w-50 mt-5 d-flex justify-content-between home-btn-box">
                <Link  to="/postrider" className=" px-3 py-2 bg-white rounded-pill">Post a Ride</Link>
                <Link to="/requestrider" className="rounded-pill px-3 py-2 bg-white">Find a Ride</Link>
            </div>
        </div>
            
    </div>
</div>
    )
}

export default Home
