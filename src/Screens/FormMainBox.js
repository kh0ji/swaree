import React from 'react'
import "./FormMainBox.scss"

function FormMainBox(props) {
    return (
   
    
<div className="login ">
    <div className="container login-box mx-auto ">
        <div className="row welcome-box ">
            <div className="col-12 col-sm-12 col-lg-6 box left  d-none d-sm-none d-lg-flex justify-content-center align-items-center">
                <div className="login-image  p-5"><img src="Images/Register.png" alt="" srcSet=""/></div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div className="p-0 p-lg-0 p-sm-5 right">
                <div className="login-heading d-flex justify-content-center">
                    <h1>{props.title}</h1>
                </div>
               {props.children}
                </div>
            </div>
        </div>
            
    </div>
</div>



    )
}

export default FormMainBox
