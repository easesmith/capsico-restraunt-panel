import { useState, useEffect } from "react";

const Counter = ({ initialTime = 120, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            if (onComplete) onComplete();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [timeLeft, onComplete]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `0${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return <span>{formatTime(timeLeft)}</span>;
};

export default Counter;
