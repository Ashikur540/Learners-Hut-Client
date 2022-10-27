import React, { useContext, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../../Assets/Images/pinwheel.png";
import { AuthContext } from "../../../../Contexts/AuthProvider";
export default function Navbar({ children }) {

    // states
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const [dark, setDark] = useState(false);

    // contexts
    const { user, UserSignOut } = useContext(AuthContext);


    const handleLogout = () => {
        if (!user) {
            toast.info("log in first atleast!")
        }
        else {
            UserSignOut()
                .then(() => {
                    toast.success("logged out")
                })
                .catch(error => {
                    toast.error(error.message)
                })
        }
    }

    return (
        <>
            {/*<!-- Component: Navbar with Avatar --> */}
            {/*<!-- Header --> */}
            <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-base-100 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden" data-theme={dark ? "dark" : "light"}>
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <Link
                            id="logo"
                            aria-label="logo"
                            aria-current="page"
                            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg text-neutral focus:outline-none lg:flex-1"
                            to="/"
                        >
                            <img src={logo} alt="" className=" w-14 lg:w-18" />
                            Learners Hut
                        </Link>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden 
              ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
            `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2  transform bg-primary rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform   rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform  rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            <li role="none" className="flex items-stretch">
                                <Link
                                    aria-label="courses"
                                    className="flex text-neutral items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    to="/courses"
                                >
                                    <span>Courses</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    aria-label="faq"
                                    className="flex text-neutral items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    to="/faq"
                                >
                                    <span>FAQ</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    aria-label="blog"
                                    className="flex text-neutral items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    to="/blog"
                                >
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch place-self: center;">
                                {/* <!-- Component: Base primary button with animation  --> */}
                                <Link
                                    aria-label="blog"
                                    className="flex items-center gap-2 py-4  lg:px-8"
                                    to="/login"
                                >
                                    <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-primary hover:bg-emerald-600 focus:bg-secondary disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                        <span>GET STARTED</span>
                                        <span className="relative only:-mx-5">
                                            <BsArrowRight />
                                        </span>
                                    </button>
                                </Link>

                                {/* <!-- End Base primary button with animation  --> */}
                            </li>
                            <li className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">


                                <Link
                                    title={user?.displayName ? user.displayName : "no user found"}
                                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                                >

                                    {
                                        user?.uid ? <img
                                            src={user?.photoURL}
                                            alt="username"
                                            width="40"
                                            height="40"
                                            className="max-w-full rounded-full"
                                        />
                                            :
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                alt="user name"
                                                title={user?.displayName}
                                                width="40"
                                                height="40"
                                                className="max-w-full rounded-full"
                                            />
                                    }
                                </Link>
                                {/*        <!-- End Avatar --> */}
                                <button title="logout" className="text-2xl ml-2" onClick={handleLogout}><CiLogin></CiLogin></button>


                            </li>
                            <li role="none" className="flex items-stretch mx-2">
                                <label className="swap swap-rotate" >

                                    {/* <!-- this hidden checkbox controls the state --> */}
                                    <input type="checkbox" onClick={() => { setDark(!dark) }} />
                                    {/* <!-- sun icon --> */}
                                    <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                    {/* <!-- moon icon --> */}
                                    <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </li>
                        </ul>

                    </nav>
                </div>
                {children}
            </header>
            {/*<!-- End Navbar with Avatar--> */}
        </>
    )
}
