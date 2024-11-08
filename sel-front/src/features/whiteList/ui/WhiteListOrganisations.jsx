import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'shared/ui/dynamic/Table/Table';
import { fetchOrganizations } from '../../../shared/store/reducer/whiteList.reducer';

const WhiteListOrganisations = () => {
    const dispatch = useDispatch();
    const { organizations, isLoading, error, total } = useSelector(state => state.whiteList);

    const loadPage = (page, pageSize) => {
        dispatch(fetchOrganizations({ page, pageSize }));
    };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Name', width: 150 },
    ];

    return <Table data={organizations} columns={columns} isLoading={isLoading} total={total} loadPage={loadPage} />;
};

export default WhiteListOrganisations;
