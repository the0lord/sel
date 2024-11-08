import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from 'shared/store/reducer/users.reduder';
import Table from "shared/ui/dynamic/Table/Table";
const UsersList = () => {
    const { users } = useSelector(({ users }) => users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersThunk());
    }, []);

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Имя', width: 150 },
        { field: 'Role', headerName: 'Роль', width: 150 },

    ]



    return <Table
        data={users}
        columns={columns}
        isLoading={false}
        total={2}
        loadPage={(page, pageSize) => { }}
    />;
};

export default UsersList;