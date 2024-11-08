import React from 'react';
import Table from "shared/ui/dynamic/Table/Table";
const FarmerStack = () => {
    const products = [
        {
            ID: 1,
            Name: "hi",
            UnitOfMeasure: "kg",
            Amount: "10000"
        }
    ]

    // const loadPage = (page, pageSize) => {
    //     dispatch(getOrganizations({ page, pageSize }));
    // };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Название культуры', width: 150 },
        { field: 'UnitOfMeasure', headerName: 'Единица измерения', width: 150 },
        { field: "Amount", headerName: 'Количествo', width: 50}
    ];

    return <Table
        data={products}
        columns={columns}
        isLoading={false}
        total={2}
        loadPage={(page, pageSize) => { }}
    />;
};

export default FarmerStack;