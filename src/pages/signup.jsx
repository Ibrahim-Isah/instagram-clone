/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../context/firebase';
import { useHistory, Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { doesUsernameExist } from '../services/firebase';

const signup = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault();

        const usernameExists = await doesUsernameExist(username);
        if(!usernameExists.length){
            try{
                const createdUserResult = await firebase
                .auth()
                .createUserWithEmailAndPassword(emailAddress , password);
                // authentication
                 // emailAddress and password and username (displayName)
                 await createdUserResult.user.updateProfile({
                     displayName: username
                 });

                 // firebase user collection ( create a document)
                 await firebase.firestore().collection('users').add({
                     userId: createdUserResult.user.uid,
                     username: username.toLowerCase(),
                     emailAddress: emailAddress.toLowerCase(),
                     fullName: fullName,
                     following: [],
                     dateCreated: Date.now()
                 });

                 history.push(ROUTES.DASHBOARD);
            } 
            catch (error){
                setFullName('')
                setEmailAddress('')
                setUsername('')
                setPassword('')
                setError(error.message)
            }
        } else {
            setError('That username is already taken, please try another.')
        }
    }

    const isInvalid = password === '' || emailAddress === '';

    useEffect(() => {
        document.title = 'Signup - Instagram'
    }, []);


    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="Iphone phones" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white rounded p-4 border border-gray-primary mb-4 ">

                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleSignup} method="POST">
                        <input 
                        type="text"
                        aria-label = "Enter your username"
                        placeholder="Username"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange={(e) => {setUsername(e.target.value)}} 
                        value={username}
                        />
                        <input 
                        type="text"
                        aria-label = "Enter your full name"
                        placeholder="Fullname"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange={(e) => {setFullName(e.target.value)}} 
                        value={fullName}
                        />
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
                            Sign Up
                        </button>

                    </form>
                </div>
                <div className="flex justify-center rounded items-center flex-col w-full bg-white p-4 border border-gray-primary text-black">
                    <p className="text-sm">Have an account? {``}
                    <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                        Login
                    </Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default signup
