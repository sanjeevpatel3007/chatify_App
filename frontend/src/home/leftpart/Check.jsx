import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Users from './Users'; // Import the Users component

const Check = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchuserinfo = async () => {
            setLoading(true); // Set loading state before the request

            try {
                const token = Cookies.get("jwt");
                console.log("Token:", token); // Log the token

                const response = await axios.get("http://localhost:3000/user/allusers", {
                    withCredentials: "include",
                    headers: {
                        Authorization: `Bearer ${token}` // Send the JWT token
                    }
                });

                console.log("Response from server:", response); // Log the response
                setAllUsers(response.data.filteredUsers); // Set the fetched users
                setLoading(false); // Set loading state to false after the request
            } catch (error) {
                console.error("Error fetching users:", error); // Log the error
                setError("Failed to fetch users.");
                setLoading(false);
            }
        };

        fetchuserinfo(); // Call the function inside useEffect
    }, []); // Empty dependency array means this will run once after the component mounts

    if (loading) {
        return <div>Loading...</div>; // Handle loading state
    }

    if (error) {
        return <div>{error}</div>; // Handle error state
    }

    return (
        <div>
            <Users users={allUsers} /> {/* Pass the fetched users to the Users component */}
        </div>
    );
};

export default Check;
