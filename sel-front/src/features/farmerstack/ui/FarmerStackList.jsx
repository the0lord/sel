import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStackThunk } from 'shared/store/reducer/stack.reducer';
import Table from "shared/ui/dynamic/Table/Table";
const FarmerStackList = () => {
    const { stack } = useSelector(({ stack }) => stack);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStackThunk());
    }, []);

    const columns = [

        { field: 'id', headerName: '#', width: 50 },
        { field: 'product.name', headerName: 'Название культуры', width: 150 },
        { field: 'product.measurement_unit', headerName: 'Единица измерения', width: 150 },
        { field: 'quantity', headerName: 'Количество', width: 50 },
    ]



    return <Table
        data={stack}
        columns={columns}
        isLoading={false}
        total={2}
        loadPage={(page, pageSize) => { }}
    />;
};

export default FarmerStackList;