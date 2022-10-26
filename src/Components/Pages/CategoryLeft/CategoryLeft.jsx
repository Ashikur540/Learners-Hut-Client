import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryLeft = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/courses/category")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4>All Categories{categories.length}</h4>
            <div className="flex flex-col mt-10 text-left justify-center items-start bg-green-100 rounded-lg">
                {
                    categories.map(category => <div className="font-semibold py-3 pl-6 my-1 w-full bg-teal-100" key={category.category_id}>
                        <Link to={`/courses/category/${category.category_id}`}>{category.category_name}</Link>
                    </div>)
                }

            </div>
        </div>
    );
};

export default CategoryLeft;