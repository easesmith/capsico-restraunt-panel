import { readCookie } from '@/utils/readCookie';
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = readCookie("userInfo");
        setIsAuthenticated(!!token); // Set true if token exists
    }, []);

    return isAuthenticated;
};

export default useAuth;
