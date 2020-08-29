import React from 'react';
import './Course.css';
const Course = (props) => {
    console.log(props);
    const { courseName, price, name } = props.course;
    return (
        <div className="course">
            <div>
                <h2>{props.course.courseName}</h2>
            </div>
            <div>
                <h4>${price}</h4>
                <p>This course taken by:{name}</p>
                <button className="main-button"
                    onClick={() => props.handleAddCourse(props.course)}

                >Enrolled Now</button>
            </div>

        </div>
    );
};

export default Course;