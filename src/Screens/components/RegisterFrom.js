import React from 'react'

function RegisterFrom() {
    return (
         <form action="">
                    <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                    <div className="form__group field w-100 px-5">
                        <input type="input" className="form__field" placeholder="Username" name="name" id='name' required />
                        <label htmlFor="name" className="form__label">Username</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3 mb-4">
                        <div className="form__group field w-100 px-5">
                            <input type="email" className="form__field" placeholder="email" name="name" id='address' required />
                            <label htmlFor="name" className="form__label">Email Address</label>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                    <div className="form__group field w-100 px-5">
                        <input type="password" className="form__field" placeholder="Password" name="name" id='password' required />
                        <label htmlFor="name" className="form__label">Password</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center w-100 pt-2">
                        <div className="condition px-5">
                            <p>Your personal data will be used to support your experience
                            throughout this website, to manage access to your account, and
                            for other purposes described in our privacy policy.</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-start ml-5 pl-5 mt-3">
                        <label className="checkbox path">
                            <input type="checkbox"/>
                            <svg viewBox="0 0 21 21">
                                <path
                                    d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                </path>
                            </svg>
                        </label>
                        <label className=" mx-1 che-label">I’ve read and accept the terms & conditions *</label>
                    </div>
                    
    
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="button" className="btn btn-box rounded-pill w-auto">Register</button>
                    </div>
                    </div>
                </form>
    )
}

export default RegisterFrom
