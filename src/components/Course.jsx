import React from 'react';

const Course = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">Our Fitness Courses</h2>
      <p className="text-lg mb-8 text-center text-gray-700">
        Welcome to our fitness platform Muscle Force! We offer a variety of courses to help you stay fit and healthy.
        Below are some of the courses we provide:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-yellow-800">Course 1: Cardio Kickboxing</h3>
          <video className="w-full h-56 rounded-lg" controls>
            <source src="/yoga3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-green-200 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-green-800">Course 2: High-Intensity Interval Training (HIIT)</h3>
          <video className="w-full rounded-lg" controls>
            <source src="/yoga2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-pink-200 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-pink-800">Course 3: Yoga for Flexibility</h3>
          <video className="w-full rounded-lg" controls>
            <source src="/yoga1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Add more courses as needed */}
      </div>
    </div>
  );
};

export default Course;
