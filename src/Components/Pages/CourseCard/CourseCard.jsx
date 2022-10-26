import React from 'react';
import { HiUsers } from "react-icons/hi";
const CourseCard = ({ courseData }) => {
    // console.log("card", courseData);
    const { description, instructor, thumbnail_url, title, total_inrolled, rating, price } = courseData;
    console.log(thumbnail_url, rating);
    return (
        <>
            <div className="card w-auto bg-base-100 shadow-xl">
                <figure><img src={thumbnail_url} alt="coursepic" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <div className="flex flex-row justify-start">
                        <div className="badge badge-secondary mb-2 ">{rating.badge}</div>
                        <div className="badge badge ml-auto"><HiUsers className="mr-3" />{total_inrolled}</div>
                    </div>
                    <p>{description?.length >= 100 ? description.slice(0, 150)
                        : description
                    }</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{rating.number}</div>

                        <div className="badge badge-outline font-semibold">{price} $</div>
                    </div>
                    <div className="card-actions justify-end mt-3">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;