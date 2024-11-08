import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from "shared/ui/dynamic/Table/Table";
import { getUnIndividuals } from 'shared/store/reducer/sanctions.reducer';

const SanctionsUnIndividuals = () => {
    const dispatch = useDispatch();

    const { unIndividuals, isLoading, error, total } = useSelector(state => state.sanctions);

    const loadPage = (page, pageSize) => { dispatch(getUnIndividuals({ page, pageSize })) };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Comments', headerName: 'Комментарии', width: 300 },
        { field: 'DateOfBirth', headerName: 'Год рождения', width: 200 },
        { field: 'Name', headerName: 'Имя', width: 150 },
        { field: 'Surname', headerName: 'Имя', width: 150 },
    ]

    return <Table data={unIndividuals} columns={columns} isLoading={isLoading} total={total} loadPage={loadPage} />
}

export default SanctionsUnIndividuals;