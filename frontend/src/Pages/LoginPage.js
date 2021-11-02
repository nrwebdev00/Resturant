import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../Styles/Pages/LoginPage.scss';
import { login } from '../Actions/userActions.js';

const LoginPage = ({ location, history }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
 
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
        history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return(
        <div className='login-page'>
            <div className='container pt-6'>
                <div className="card mt-6">
                    <h1 className='title is-size-2 has-text-primary has-text-centered pt-3 login-title'>Login</h1>
                    <form onSubmit={submitHandler}>
                        <div className='field mt-4'>
                            <label className='label login-input is-size-4 pt-5'>Email:</label>
                            <div className='control login-input'>
                                <input 
                                    className='input has-text-primary family-pirmary is-size-5' 
                                    name='email' 
                                    type='email' 
                                    placeholder='Enter Email' 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}   
                                />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label login-input is-size-4 pt-5'>Password:</label>
                            <div className='control login-input'>
                                <input 
                                    className='input has-text-primary family-pirmary is-size-5' 
                                    name='password' 
                                    type='password' 
                                    placeholder='Enter Email' 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}   
                                />
                            </div>
                        </div>
                        <div className='login-button mt-6'>
                            <button className='button is-medium is-size-4 is-primary has-text-light is-fullwidth' type='submit'>Login</button>
                        </div>
                        <p className='has-text-centered mt-6'>
                            Please <Link to='/register' className='is-clickable has-text-primary'>Click Here </Link> To Register with us,<br />
                            Or <Link to='/' className='is-clickable has-text-primary'>Cick Here </Link> To Go Back.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;