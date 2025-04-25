import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses/')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.instructor}</p>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
