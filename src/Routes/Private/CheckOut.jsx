import React, { useContext } from "react";
import { BsStarFill } from "react-icons/bs";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider";

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const courseInfo = useLoaderData();
    // console.log(courseInfo);
    const { thumbnail_url, title, rating, price } = (courseInfo);
    return (
        <div >
            <h1 className="text-neutral font-semibold my-4 text-2xl text-center ">Dear, <span className="text-primary">{user?.displayName}</span> Checkout here</h1>

            <div className="flex flex-col justify-start items-center">
                <h1 className="text-secondary font-semibold my-4 text-xl">Course info</h1>
                <p className="text-neutral text-md">{title}</p>
                <div className="flex flex justify-start items-center px-4">
                    <figure className="my-4 mx-6 ">
                        <img src={thumbnail_url} alt="" className="rounded-lg border-4 " />
                    </figure>
                    <div className="flex flex-col justify-start mr-3">
                        <span className="font-semibold flex items-center"><BsStarFill className="mr-3 text-yellow-600" />{rating.number}</span>
                        <span className="font-semibold flex items-center"><BsStarFill className="mr-3 text-yellow-600" />Price:</span>
                        <p className="text-neutral">
                            {price} $
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;
