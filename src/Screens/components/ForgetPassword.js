import React from 'react'

function ForgetPassword() {
    return (
         <form action="">
                    <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <div className="forget-info "><p>Lost your password? Please enter your username or email address.
                        You will receive a link to create a new password via email.</p></div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                    <div className="form__group field w-100 px-0 px-lg-5 px-sm-5">
                        <input type="email" className="form__field" placeholder="Username" name="name" id='name' required />
                        <label for="name" className="form__label">Email Address</label>
                    </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-4 mb-5"><button type="button" className="btn btn-box rounded-pill w-50">Reset Password</button>
                    </div>
                    
                    </div>
                </form>
    )
}

export default ForgetPassword
