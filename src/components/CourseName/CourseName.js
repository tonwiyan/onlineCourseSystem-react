import React, { useState } from 'react';
import { data } from '../../data/data';
import './CourseName.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const CourseName = (props) => {
    const first13 = data.slice(0, 13);
    const [courses, setCourses] = useState(first13);

    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        (console.log("added", course));

        const newCart = [...cart, course];
        setCart(newCart);

        // const { price, name } = props.course;
    }

    return (
        <div className="course-container">
            <div className="courseName">

                {
                    courses.map(course => <Course
                        handleAddCourse={handleAddCourse}
                        course={course}
                    ></Course>)
                }

            </div >

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default CourseName;