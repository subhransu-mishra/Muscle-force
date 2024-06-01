import React from "react";

const Featured = () => {
  return (
    <div>
      {/* First section */}
      <div className="flex flex-col md:flex-row items-center gap-5 px-5 py-8">
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/940119500/photo/bathroom-scales-on-wooden-floor-with-lcd-screen-saying-bmi.jpg?b=1&s=612x612&w=0&k=20&c=27serDPxPHLoycXXJXNbzHBLwKGhxCd3NqJwabX2WGM="
            alt=""
            className="w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-6xl underline text-center py-5 text-blue-700 font-bold">
            CHECK YOUR BMI
          </h1>
          <p className="text-center text-gray-800 font-medium">
            Body Mass Index (BMI) is a widely used measurement that helps assess
            an individual's body weight in relation to their height. It's a
            simple calculation based on a person's weight and height, often used
            as a screening tool to identify possible weight problems in adults.
          </p>
        </div>
      </div>

      {/* Second section */}
      <div className="flex flex-col md:flex-row items-center gap-5 px-5 py-5 mt-14">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-6xl underline text-center py-5 text-blue-700 font-bold">
           Control your Calorie intake
          </h1>
          <p className="text-center text-gray-800 font-medium">
          To maintain a healthy weight, it's essential to balance calorie intake with calorie expenditure. Consuming more calories than the body needs can lead to weight gain, while consuming fewer calories than needed can lead to weight loss. The goal is to achieve a balance where calorie intake matches calorie expenditure.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.healthifyme.com/blog/wp-content/uploads/2021/12/High-Calorie-Foods-2-1.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
