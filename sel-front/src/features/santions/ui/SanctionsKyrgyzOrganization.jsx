import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from "shared/ui/dynamic/Table/Table";
import { getKyrgyzOrganizations } from 'shared/store/reducer/sanctions.reducer';

const SanctionsKyrgyzOrganization = () => {
    const dispatch = useDispatch();

    const { kyrgyzOrganizations, isLoading, total } = useSelector(state => state.sanctions);

    const loadPage = (page, pageSize) => { dispatch(getKyrgyzOrganizations({ page, pageSize })) };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'BasicInclusion', headerName: 'Базовое включение', width: 300 },
        { field: 'CategoryPerson', headerName: 'Категория организации', width: 200 },
        { field: 'DateInclusion', headerName: 'Дата включения', width: 150 },
        { field: 'Name', headerName: 'Имя', width: 150 },
    ]

    return <Table data={kyrgyzOrganizations} columns={columns} isLoading={isLoading} total={total} loadPage={loadPage} />
}

export default SanctionsKyrgyzOrganization;
