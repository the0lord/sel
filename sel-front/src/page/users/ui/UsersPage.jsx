import { UsersList } from 'features/users';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tw from "shared/ui/dynamic/Tailwind/Tw";

const UsersPage = () => {
    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate("/users/create"); 
    };

    return (
        <Tw cn="container">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Users List</h1>
                <button
                    onClick={handleCreateClick}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Create New User
                </button>
            </div>
            <UsersList />
        </Tw>
    );
};

export default UsersPage;
