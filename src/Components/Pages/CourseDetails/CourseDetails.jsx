import React from 'react';
import { BsFillCameraVideoFill, BsStarFill } from "react-icons/bs";
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
const CourseDetails = () => {
    const courseData = useLoaderData();
    // console.log(courseData);
    const { description, instructor, image_url, title, total_inrolled, rating, price, _id, learn } = (courseData);
    return (
        <section>
            <div class="container px-6 m-auto">
                <h1 className="text-neutral text-2xl font-semibold ml-4">Welcome to {courseData.title}</h1>
                <div class="block md:grid  gap-6 md:grid-cols-10 lg:grid-cols-12">
                    <div class="block md:col-span-6  lg:col-span-8">
                        <figure className="my-4 mx-6">
                            <img src={image_url} alt="" className="rounded-lg border-4" />
                            <p className="text-neutral my-2">
                                {description}
                            </p>
                        </figure>
                        <div className="flex justify-star flex-col">
                            <h2 className="text-neutral my-4 font-semibold">Curriculum</h2>
                            {
                                learn.map(list => <div className="py-2 my-2 md:ml-4 lg:ml-8">
                                    ✅ {list.slice(2, -1)}
                                </div>)
                            }
                        </div>
                    </div>
                    <div class="block mt-10 mb-6 px-3 md:col-span-4 lg:col-span-4">
                        <div className="my-4 py-2 px-4">
                            <span className="font-semibold flex items-center"><BsFillCameraVideoFill className="mr-3 text-primary" />Instructor:</span>
                            <p className="text-neutral">
                                {instructor.name}
                                &nbsp;
                                {instructor.last_updated}
                            </p>
                        </div>
                        <div className="my-2 py-2 px-4">
                            <span className="font-semibold flex items-center"><BsStarFill className="mr-3 text-yellow-500" />Ratings:</span>
                            <p className="text-neutral">
                                {rating.number}
                                <div className="badge badge-info ml-2">{rating.badge}</div>
                            </p>
                            <p className="text-neutral my-2 py-2">
                                💸 {price} $

                            </p>
                            <p className="text-neutral my-3">
                                Full Lifetime Access
                            </p>
                            {/* <!-- Component: Base secondary button with trailing icon  --> */}
                            <button class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-primary text-accent hover:bg-accent hover:border-1 hover:text-secondary focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
                                <span>Curriculum</span>
                                <span class="relative only:-mx-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-22 desc-22">
                                        <title id="title-22">Icon title</title>
                                        <desc id="desc-22">
                                            A more detailed description of the icon
                                        </desc>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                    </svg>
                                </span>
                            </button>
                            {/* <!-- End Base secondary button with trailing icon  --> */}

                            {/* <!-- Component: Base secondary elevated button --> */}
                            <Link to={`/courses/${_id}/checkout`}>
                                <button class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded shadow-md focus-visible:outline-none justify-self-center whitespace-nowrap text-primary hover:bg-accent hover:border-1 hover:text-secondary focus:bg-emerald-200 focus:text-emerald-700 focus:text-emerald-700 focus:shadow-md focus:shadow-emerald-100 disabled:cursor-not-allowed disabled:border-emerald-100 disabled:bg-emerald-100 disabled:shadow-none my-4 mx-2">
                                    <span>Premium Access</span>
                                </button></Link>
                            {/* <!-- End Base secondary elevated button --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;