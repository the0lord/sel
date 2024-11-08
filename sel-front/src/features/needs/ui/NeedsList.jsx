import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNeedsThunk } from 'shared/store/reducer/needs.reducer';
import Table from "shared/ui/dynamic/Table/Table";
const NeedsList = () => {
    const { needs } = useSelector(({ needs }) => needs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNeedsThunk());
    }, []);

    const columns = [
        { field: 'id', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Название культуры', width: 150 },
        { field: 'UnitOfMeasure', headerName: 'Единица измерения', width: 150 },
        { field: 'Amount', headerName: 'Количество', width: 50 },
    ]



    return <Table
        data={needs}
        columns={columns}
        isLoading={false}
        total={2}
        loadPage={(page, pageSize) => { }}
    />;
};

export default NeedsList;