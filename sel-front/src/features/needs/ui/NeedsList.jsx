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
        { field: 'quantity', headerName: 'Количество', width: 50 },
        { field: 'start_date', headerName: 'Начальная дата', width: 150},
        { field: 'end_date', headerName: 'Конечная дата', width: 150 },
        { field: 'name', headerName: 'Название культуры', width: 150 },
        { field: 'measurement_unit', headerName: 'Единица измерения', width: 150 },
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