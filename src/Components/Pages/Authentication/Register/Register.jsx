import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import registerPic from "../../../../Assets/Images/signuppic.jpg";
import { AuthContext } from '../../../../Contexts/AuthProvider';


const Register = () => {
    // context
    const { UserSignUp, updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // validation objects......

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        url: "",
        name: "",
        // password2: ""
    })
    const [error, setError] = useState({
        emailErr: "",
        urlErr: "",
        passwordErr: "",
        // passwordErr2: "",
        // mismatch: ""
    })



    // handeling functions---------------------------------\
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = userInfo.name;
        const url = userInfo.url;
        const password = userInfo.password;
        const email = userInfo.email;
        console.log(email, password, name, url);
        // signUp
        handleUserSignUp(email, password);
        navigate("/login")




    }


    const handleName = (e) => {
        const fullname = e.target.value;
        setUserInfo({ ...userInfo, name: fullname })
    }


    const handleUserSignUp = (email, password) => {
        const name = userInfo.name;
        const url = userInfo.url;
        UserSignUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("successfully registered", {
                    position: "top-center"
                })
                handleUpdateUser(name, url);

            })
            .catch(error => {
                console.error(error);
                toast.error(error.message, {
                    position: "top-center"
                })
            })
    }


    const handleUpdateUser = (name, photoURL) => {

        console.log("updateFunc", name, photoURL);
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        console.log("profile", profile);
        updateUserProfile(profile)
            .then(() => {
                console.log("inside ", profile);
                toast.success("profile updated", {
                    position: "top-center"
                })
            }).catch(error => {
                console.log(error)
            })
    }


    //handling  validation functions

    const handleURL = (e) => {
        const URL = e.target.value;
        const valid = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(URL);

        if (!valid)
            setError({ ...error, urlErr: "Please provide a valid url" });
        else {
            setError({ ...error, urlErr: "" });

        }
        setUserInfo({ ...userInfo, url: URL })
    }


    const handleEmail = (e) => {

        const email = e.target.value;
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

        if (!validEmail) {
            setError({ ...userInfo, emailErr: "Please provide a valid email address" });
            setUserInfo({ ...userInfo, email: "" })
        }

        else {
            setError({ ...error, emailErr: "" })
            setUserInfo({ ...userInfo, email: email })
        }
        console.log(userInfo.email);
    }


    const handlePass = (e) => {
        const password = e.target.value;
        console.log(password);
        // set the errros  ............
        const lenError = password.length < 8;
        const charError = !/(?=[^!@#$&*]*[!@#$&*])/.test(password);
        const UPPLetterError = !/(?=(?:[^A-Z]*[A-Z]){2})/.test(password);
        const numericError = !/(?=(?:[^0-9]*[0-9]){2})/.test(password);


        if (lenError) {

            setError({ ...error, passwordErr: "password must be 8 characters" })
            setUserInfo({ ...userInfo, password: "" })
            setUserInfo({ ...userInfo, password2: "" })

        }
        else if (charError) {
            setError({ ...error, passwordErr: "password should have at least have a special character" })
            setUserInfo({ ...userInfo, password: "" })
            setUserInfo({ ...userInfo, password2: "" })

        }
        else if (UPPLetterError) {
            setError({ ...error, passwordErr: "password should have at least 2 capital letters" })
            setUserInfo({ ...userInfo, password: "" })
            setUserInfo({ ...userInfo, password2: "" })

        }
        else if (numericError) {
            setError({ ...error, passwordErr: "password should have atleast 2 numbers" })
            setUserInfo({ ...userInfo, password: "" })
            setUserInfo({ ...userInfo, password2: "" })

        }
        else {
            setError({ ...error, passwordErr: "" });
            setError({ ...userInfo, password: "" })
            setError({ ...userInfo, password2: "" })

        }
        setUserInfo({ ...userInfo, password: password, password2: e.target.value })
        // console.log(userInfo.password);
    }

    return (
        <div className="relative">
            <img
                src={registerPic}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div className="flex flex-col items-center justify-between xl:flex-row">

                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Sign up here
                                </h3>
                                <form onSubmit={handleSubmit} >
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="fullname"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Full name
                                        </label>
                                        <input
                                            placeholder="fullname"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="fullname"
                                            name="fullname"
                                            onChange={handleName}
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="picture"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Your picture URl
                                        </label>
                                        <input
                                            placeholder="http://url.com"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="picture"
                                            name="picture"
                                            autoComplete="off"
                                            onChange={handleURL}
                                        />
                                    </div>
                                    {
                                        error?.urlErr ? <p className="text-red-600 font-semibold my-3">{error.urlErr}</p>
                                            : <></>
                                    }
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="gulugulu@example.org"
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                            onChange={handleEmail}
                                        />
                                    </div>
                                    {
                                        error?.emailErr ? <p className="text-red-600 font-semibold my-3">{error.emailErr}</p>
                                            : <></>
                                    }
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="*******"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                            onChange={handlePass}
                                        />
                                    </div>
                                    {
                                        error?.passwordErr ? <p className="text-red-600 font-semibold my-3">{error.passwordErr}</p>
                                            : <></>
                                    }

                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-mdfocus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                                        >
                                            Register
                                        </button>
                                    </div>
                                    {/* <p className="text-xs text-gray-600 sm:text-sm">
                                        Cann't remember your password <Link to="/login" className="text-blue-600 font-semibold">Reset</Link> now
                                    </p> */}
                                </form>
                            </div>
                        </div>

                        {/* 2nd */}
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
                            <a
                                href="/login"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider bg-accent rounded-md py-3 px-8 transition-colors duration-200 text-teal-400 hover:bg-teal-100"
                            >
                                Logn in
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;