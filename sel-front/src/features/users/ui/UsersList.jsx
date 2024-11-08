import React from 'react';
import Table from "shared/ui/dynamic/Table/Table";
const UsersList = () => {
    const users = [
        {
            ID: 1,
            Name: "Alisher Isaev",
            Role: "Admin"
        }
    ]
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