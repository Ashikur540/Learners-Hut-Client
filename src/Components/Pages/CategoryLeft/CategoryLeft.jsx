import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CategoryLeft = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://learnears-hut-server.vercel.app/courses/category")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {/* <h4>All Categories{categories.length}</h4> */}
            <div className="flex flex-col mt-10 text-left justify-center items-start bg-base-100 rounded-lg">
                {
                    categories.map(category => <div className="font-semibold py-3 pl-6 my-1 w-full bg-accent rounded-md hover:bg-primary hover:text-accent duration-150 "
                    >
                        <NavLink to={`/courses/category/${category.category_id}`} key={category.category_id}>{category.category_name}</NavLink>
                    </div>)
                }

            </div>
        </div>
    );
};

export default CategoryLeft;



// className="font-semibold py-3 pl-6 my-1 w-full bg-accent rounded-md hover:bg-primary hover:text-accent duration-150 " 