import React from 'react';
import { useLoaderData } from 'react-router';
import CourseCard from '../CourseCard/CourseCard';

const CoursesRight = () => {
    const category_courses = useLoaderData();
    console.log(category_courses);


    return (
        <div>
            <h1 className="text-2xl text-teal-900 font-bold my-2 text-center">Courses found {category_courses.length}</h1>
            <div className="container px-4 m-auto">
                <div className=" card_grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        category_courses.map(course => {
                            return (
                                <CourseCard key={course._id} courseData={course}></CourseCard>
                            )
                        })
                    }





                </div>

            </div>
        </div>
    );
};

export default CoursesRight;