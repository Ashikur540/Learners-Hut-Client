import React, { useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider";
const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const courseInfo = useLoaderData();
    // console.log(courseInfo);



    const { thumbnail_url, title, rating, price } = (courseInfo);
    return (
        <div className="mb-20">
            <h1 className="text-neutral font-semibold my-4 text-2xl text-center ">Dear, <span className="text-primary">{user?.displayName}</span> Activete your premium access ❤</h1>

            <div className="flex flex-col justify-start items-center">
                <h1 className="text-secondary font-semibold my-4 text-xl">Course info</h1>
                <p className="text-neutral text-md">{title}</p>
                <div className="flex flex justify-start items-center px-4">
                    <figure className="my-4 mx-6 w-1/3">
                        <img src={thumbnail_url} alt="" className="rounded-lg border-4 " />
                    </figure>
                    <div className="flex flex-col justify-start mr-3">
                        <span className="font-semibold flex items-center"><BsStarFill className="mr-3 text-yellow-400" />{rating.number}</span>
                        <span className="font-semibold flex items-center"><FaMoneyBillWave className="mr-3 text-green-500" />Price:<p className="text-neutral">
                            {price} $
                        </p></span>

                    </div>

                </div>
                <button className="btn btn-secondary btn-sm" onClick={() => toast.success("Lovely.🧡")}>Checkout</button>
            </div>
        </div>
    );
};

export default CheckOut;
