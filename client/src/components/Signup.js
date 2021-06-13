// import { set } from 'mongoose';
import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { Link } from "react-router-dom";
import './Signup.css';
import { signup } from '../api/auth'; 


const Signup = () => {
    /*This hold data before it is sent to the db*/
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        successMessage: false,
        errorMessage: false,
        loading: false, /* Visual icon that asks the user to be patient */
    })

    /*Destructuring the form data*/
    const {
        username,
        email,
        password,
        password2,
        successMessage,
        errorMessage,
        loading } = formData;
    /*******************************
     * EVENT HANDLERS
    ********************************/
    const handleChange = evt => {
        //    console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMessage: '',
            errorMessage: '',
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        // Client-side validation
        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setFormData({
                ...formData, errorMessage: "All fields are required",
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData, errorMessage: "Invalid email",
            });
        } else if (!equals(password, password2)) {
            setFormData({
                ...formData, errorMessage: "Passwords do not match",
            });
        } else {
            const { username, email, password } = formData;
            const data = { username, email, password };

            setFormData({...formData, loading: true});

            signup(data)
                .then(response => {
                    console.log('Axios signup success:',response);
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        password2: '',
                        loading: false,
                        successMessage: response.data.successMsg
                    })
                })
                .catch(err => {
                    console.log('Axios signup error', err);
                    setFormData({
                        ...formData,
                        loading: false,
                    })
                })
        }
    };
    /*******************************
     * VIEWS
    ********************************/
    const showSignupForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
            {/* username */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input
                    name='username'
                    value={username}
                    className='form-control'
                    placeholder='Username'
                    type='text'
                    onChange={handleChange}
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
                    value={email}
                    className='form-control'
                    placeholder='Email address'
                    type='email'
                    onChange={handleChange}

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
                    value={password}
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                    onChange={handleChange}

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
                    value={password2}
                    className='form-control'
                    placeholder='Confirm password'
                    type='password'
                    onChange={handleChange}


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
                Have an account? <Link to='./Signin.js  '>Sign In</Link>
            </p>
        </form>
    )

    /*******************************
     * RENDERER
    ********************************/
    return (
        <div className='signup-container'>
            <div className='row px-10 vh-100'> {/*vh occupies the entire vertical height of the device*/}
                <div className='col-md-5 mx-auto '>
                    {errorMessage && showSuccessMsg(successMessage)}
                    {errorMessage && showErrorMsg(errorMessage)}
                    {loading && showLoading()}
                    {showSignupForm()}
                    {/* {JSON.stringify(formData)} */}
                </div>
            </div>

        </div>
    );
};

export default Signup;
