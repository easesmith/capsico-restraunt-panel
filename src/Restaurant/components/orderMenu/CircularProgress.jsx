import React from 'react';

const CircularProgress = ({ progress }) => {
    // Clamp the progress between 0 and 100
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    // Calculate the stroke-dashoffset for the progress circle (270 degrees)
    const circleRadius = 45;
    const circumference = 2 * Math.PI * circleRadius; // Full circle
    const arcLength = (3 / 4) * circumference; // 270 degrees (3/4 of a circle)
    const offset = arcLength - (clampedProgress / 100) * arcLength;

    return (
        <div className="relative w-36 h-36 flex items-center justify-center">
            <svg
                className="w-full h-full transform rotate-90" // Rotate to start from the top
                viewBox="0 0 100 100"
            >
                {/* Background Circle (270 degrees) */}
                <circle
                    cx="50"
                    cy="50"
                    r={circleRadius}
                    fill="none"
                    stroke="#FBCFE8" // Tailwind's pink-200
                    strokeWidth="10"
                    strokeDasharray={200} // Only 270 degrees of the circle
                    strokeLinecap="round"
                    strokeDashoffset="-40"
                />
                {/* Progress Circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={circleRadius}
                    fill="none"
                    stroke="#EF4444" // Tailwind's red-500
                    strokeWidth="10"
                    strokeDasharray={125} // Only 270 degrees of the circle
                    strokeDashoffset="-40"
                    strokeLinecap="round"
                />
            </svg>
            {/* Text in the Center */}
            <div className="absolute text-black text-2xl font-bold">{clampedProgress}%</div>
        </div>
    );
};

export default CircularProgress;
