import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './login.css'

const Loging = () => {
    const { user, signInUsingGoogle, loginEmailAndPassword, userEmail, userPassword } = useFirebase();
    const location = useLocation();
    // console.log(console.log("location", location.state?.form))
    return (
        <div className='login-form'>
            <div >
                <h2>Login</h2>
                <form onSubmit={loginEmailAndPassword} >
                    <input onBlur={userEmail} type="email" name="" placeholder="Your email" />
                    <br />
                    <input onBlur={userPassword} type="password" name="" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>new to  Medical Life ? <Link to="/register">Create An account</Link></p>
                <div>--------------or-------------</div>
                <button onClick={signInUsingGoogle} className="btn btn-warning p-2 m-2">Google Sign In</button>
            </div>

        </div>
    );
};

export default Loging;