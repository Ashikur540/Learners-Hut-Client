import React from 'react';
import { Outlet } from 'react-router';
import CategoryLeft from '../CategoryLeft/CategoryLeft';

const Courses = () => {
    return (
        <div>
            {/* <h2 className="text-2xl font-bold text-teal-600  text-center my-6">Here are the populer courses of us</h2>
             */}

            <section>
                <div className="container px-6 m-auto">
                    <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-4 lg:col-span-2">
                            <CategoryLeft></CategoryLeft>
                        </div>
                        <div className="col-span-4 lg:col-span-10 border-2 my-10">
                            <Outlet>

                            </Outlet>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Courses;