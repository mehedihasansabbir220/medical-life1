import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { signInEmailAndPassword, userEmail, userPassword } = useFirebase();
    return (
        <div className='login-form'>
            <div>
                <h2> Register </h2>
                <form onSubmit={signInEmailAndPassword} >
                    <input onBlur={userEmail} type="email" name="" placeholder="Your email" />
                    <br />
                    <input onBlur={userPassword} type="password" name="" placeholder="write your password" />
                    <br />
                    <input onBlur={userPassword} type="password" name="" placeholder="please r-write your password" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>Allready have an account  ? <Link to="/login">Login </Link></p>
                <div>--------------or-------------</div>
                <button className="btn btn-warning p-2 m-2">Google Sign In </button>
            </div>

        </div>
    );
};

export default Register;