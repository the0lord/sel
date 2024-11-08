import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from "shared/ui/dynamic/Table/Table";
import { getUnOrganizations } from 'shared/store/reducer/sanctions.reducer';

const SanctionsUnOrganizations = () => {
    const dispatch = useDispatch();

    const { unOrganizations, isLoading, error, total } = useSelector(state => state.sanctions);

    const loadPage = (page, pageSize) => { dispatch(getUnOrganizations({ page, pageSize })) };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Comments', headerName: 'Комментарии', width: 300 },
        { field: 'Type', headerName: 'Категория организации', width: 200 },
        { field: 'Name', headerName: 'Имя', width: 150 },
    ]

    return <Table data={unOrganizations} columns={columns} isLoading={isLoading} total={total} loadPage={loadPage} />
}

export default SanctionsUnOrganizations;
