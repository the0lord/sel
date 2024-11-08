import UsersList from 'features/users/ui/UsersList'; import React from 'react';
import Tw from "shared/ui/dynamic/Tailwind/Tw";

const  UsersPage= () => {
    return <Tw cn="container">
        <UsersList />
    </Tw>
};

export default UsersPage ;