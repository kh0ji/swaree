import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
    return (
            <form action="">
                    <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <div className="form__group field w-100 px-5">
                        <input type="input" className="form__field" placeholder="Username" name="name" id='name' required />
                        <label htmlFor="name" className="form__label">Username</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3 mb-4">
                    <div className="form__group field w-100 px-5">
                        <input type="password" className="form__field" placeholder="Password" name="name" id='pass' required />
                        <label htmlFor="name" className="form__label">Password</label>
                    </div>
                    </div>
                    
                    <div className="col-6 d-flex justify-content-end">
                        <label className="checkbox path">
                            <input type="checkbox"/>
                            <svg viewBox="0 0 21 21">
                                <path
                                    d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                </path>
                            </svg>
                        </label>
                        <label className=" mx-1 che-label">Show Password</label>
                    </div>
                    
                    <div className="col-6 d-flex justify-content-start">
                    <label className="checkbox path">
                        <input type="checkbox"/>
                        <svg viewBox="0 0 21 21">
                            <path
                                d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                            </path>
                        </svg>
                    </label>
                    <label className=" mx-1 che-label">Remember Me</label>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="button" className="btn btn-box rounded-pill w-25">Login</button>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-5">
                        <div className="create-account"><p><Link to="/register" data-bs-toggle="modal" data-bs-target="#Register" data-bs-dismiss="modal">Create Account</Link></p></div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="create-account forget-pass">
                            <p><Link to="/forgetpassword" data-bs-toggle="modal" data-bs-target="#forgetPassword" data-bs-dismiss="modal">Forgot Password?</Link></p>
                        </div>
                    </div>
                    </div>
                </form>
    )
}

export default LoginForm
