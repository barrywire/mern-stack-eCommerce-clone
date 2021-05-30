import React from 'react';
import { Link } from "react-router-dom";
import './Signup.css';


const Signup = () => {
    /*******************************
     * VIEWS
    ********************************/
    const showSignupForm = () => (
        <form className='signup-form' noValidate>
            {/* username */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input
                    name='username'
                    className='form-control'
                    placeholder='Username'
                    type='text'
                />
            </div>
            {/* email */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input
                    name='email'
                    className='form-control'
                    placeholder='Email address'
                    type='email'
                />
            </div>
            {/* password */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input
                    name='password'
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                />
            </div>
            {/* password2 */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input
                    name='password2'
                    className='form-control'
                    placeholder='Confirm password'
                    type='password'

                />
            </div>
            {/* signup button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Signup
                </button>
            </div>
            {/* already have account */}
            <p className='text-center text-white'>
                Have an account? <Link to='./Signin.js'>Sign In</Link>
            </p>
        </form>
    )

    /*******************************
     * RENDERER
    ********************************/
    return(
        <div className='signup-container'>
            <div className='row px-10 vh-100'> {/*vh occupies the entire vertical height of the device*/}
                <div className='col-md-5 mx-auto '>
                    { showSignupForm() }
                </div>
            </div>
            
        </div>
    );
};

export default Signup;
