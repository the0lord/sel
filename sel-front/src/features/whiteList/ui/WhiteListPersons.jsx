import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'shared/ui/dynamic/Table/Table';
import { fetchPersons } from '../../../shared/store/reducer/whiteList.reducer';


const WhiteListPersons = () => {
    const dispatch = useDispatch();
    const { persons, isLoading, error, total } = useSelector(state => state.whiteList);

    // useEffect(() => {
    //     dispatch(fetchPersons({ page: 1, pageSize: 10 }));
    // }, []);

    const loadPage = (page, pageSize) => {
        dispatch(fetchPersons({ page, pageSize }));
    };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Name', width: 150 },
        { field: 'Surname', headerName: 'Surname', width: 150 },
        { field: 'Patronymic', headerName: 'Patronymic', width: 150 },
    ];

    // console.log('Persons state:', persons);  
    // console.log('IsLoading state:', isLoading);  
    // console.log('Error state:', error);  
    // console.log('Total:', total);  // Check the total number of persons

    return <Table data={persons} columns={columns} isLoading={isLoading} total={total} loadPage={loadPage} />;
    // return (
    //     <div><p>sadfasdfasdf</p></div>
    // )

};

export default WhiteListPersons;
