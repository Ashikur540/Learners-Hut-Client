import React from 'react';
import { HiUsers } from "react-icons/hi";
import { Link } from 'react-router-dom';
const CourseCard = ({ courseData }) => {
    // console.log("card", courseData);
    const { description, instructor, thumbnail_url, title, total_inrolled, rating, price, _id } = courseData;
    console.log(_id);
    return (
        <>
            <div className="card w-auto bg-accent shadow-xl my-4">
                <figure><img src={thumbnail_url} alt="coursepic" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <div className="flex flex-row justify-start">
                        <div className="badge badge-secondary mb-2 ">{rating.badge}</div>
                        <div className="badge badge ml-auto " title="Total inrolled "><HiUsers className="mr-3" />{total_inrolled}</div>
                    </div>
                    <p>{description?.length >= 100 ? description.slice(0, 150)
                        : description
                    }</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{rating.number}</div>

                        <div className="badge badge-outline font-semibold">{price} $</div>
                    </div>
                    <div className="card-actions justify-center mt-3">
                        <Link to={`${_id}`} > <button className="btn btn-wide btn-primary text-base-100">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;