import { GoogleAuthProvider } from '@firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginPic from "../../../../Assets/Images/loginpic.webp";
import { AuthContext } from '../../../../Contexts/AuthProvider';



const Login = () => {
    // context
    const { UserSignIn, setUser, user, googleSignin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    console.log("login:", user);
    const navigate = useNavigate()
    // states
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = userInfo.password;
        const email = userInfo.email;
        console.log(email, password);
        // signUp
        handleUserSignin(email, password)
        navigate("/courses")

    }


    const handleUserSignin = (email, password) => {
        // console.log("from function", email, password)
        UserSignIn(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser);
                // setUser(user)
                toast.success("successfully logged in", {
                    position: "top-center"
                })
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message, {
                    position: "top-center"
                })

            })
    }

    const handleGoogleSignin = () => {

        googleSignin(googleProvider).then(result => {
            const user = result.user;
            console.log(user);
            toast.success("successfully logged in", {
                position: "top-center"
            })
        })
            .catch(error => {
                console.error(error);
                toast.error(error.message, {
                    position: "top-center"
                })
            })
    }


    const handleEmail = (e) => {
        const email = e.target.value;
        setUserInfo({ ...userInfo, email: email })
    }
    const handlePassword = (e) => {
        const password = e.target.value;
        setUserInfo({ ...userInfo, password: password })
    }
    return (
        <div className="relative">
            <img
                src={LoginPic}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col flex-wrap items-center justify-between xl:flex-row">

                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Sign in here
                                </h3>
                                <form onSubmit={handleSubmit}>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="bulu@example.org"
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                            onChange={handleEmail}
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="******"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                            onChange={handlePassword}
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4 flex flex-row justify-evenly items-center">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111450.png" className="w-8" alt="" onClick={handleGoogleSignin} />
                                        <img src="https://cdn-icons-png.flaticon.com/512/270/270798.png" className="w-8" alt="" />
                                    </div>

                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-mdfocus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm">
                                        Cann't remember your password <Link to="/login" className="text-blue-600 font-semibold">Reset</Link> now
                                    </p>
                                </form>
                            </div>
                        </div>

                        <div className="w-full max-w-xl mb-12 mt-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                The quick, brown fox <br className="hidden md:block" />
                                jumps over a{' '}
                                <span className="text-teal-accent-400">lazy dog</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                quae.
                            </p>
                            <Link
                                to="/register"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider bg-accent rounded-md py-3 px-8 transition-colors duration-200 text-teal-400 hover:bg-teal-100"
                            >
                                REGISTER
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="green"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;