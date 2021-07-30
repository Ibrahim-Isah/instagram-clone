/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../context/firebase';
import { useHistory, Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const logic = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            await firebase.auth().signInWithEmailAndPassword(emailAddress , password);
            history.push(ROUTES.DASHBOARD)
        } catch (error){
            setEmailAddress('')
            setPassword('')
            setError(error.message)
        }
    }

    const isInvalid = password === '' || emailAddress === '';

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, []);


    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="hidden md:flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="Iphone phones" />
            </div>
            <div className="flex flex-col w-4/5 mx-auto md:w-2/5">
                <div className="flex flex-col items-center bg-white rounded p-4 border border-gray-primary mb-4 ">

                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleLogin} method="POST">
                        <input 
                        type="text"
                        aria-label = "Enter your email address"
                        placeholder="Email address"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange={(e) => {setEmailAddress(e.target.value)}} 
                        value={emailAddress}
                        />
                        <input 
                        type="password"
                        aria-label = "Enter your Password"
                        placeholder="Password"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange={(e) => {setPassword(e.target.value)}} 
                        value={password}
                        />
                        <button 
                        type="submit"
                        className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'}`}
                        disabled={isInvalid}>
                            Login
                        </button>

                    </form>
                </div>
                <div className="flex justify-center rounded items-center flex-col w-full bg-white p-4 border border-gray-primary text-black">
                    <p className="text-sm">Don't have an account? {``}
                    <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
                        Sign up
                    </Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default logic
