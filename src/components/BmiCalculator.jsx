import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    if (isNaN(weightKg) || isNaN(heightCm) || heightCm === 0) return;

    const heightM = heightCm / 100;
    const bmiValue = weightKg / (heightM * heightM);
    setBMI(bmiValue.toFixed(2));
  };

  const getBMICategory = () => {
    if (bmi === null) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-gradient-to-r from-purple-500 to-indigo-600 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">BMI Calculator</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="weight" className="text-white">Weight (kg):</label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border rounded-md px-2 py-1"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="height" className="text-white">Height (cm):</label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border rounded-md px-2 py-1"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
          >
            Calculate
          </button>
          {bmi !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-center text-white"
            >
              Your BMI: {bmi} ({getBMICategory()})
            </motion.div>
          )}
          <div className="text-sm text-white text-center">
            BMI Categories:
            <br />
            Underweight = {"<"}18.5
            <br />
            Normal weight = 18.5–24.9
            <br />
            Overweight = 25–29.9
            <br />
            Obesity = BMI of 30 or greater
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
