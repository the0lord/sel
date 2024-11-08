import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'shared/ui/dynamic/Table/Table';
import { getPersons } from '../../shared/store/reducer/found.reducer';


const FoundPerson = () => {
    const dispatch = useDispatch();
    const { foundPersons, isLoading, error, total } = useSelector(state => state.found);

    const loadPage = (page, pageSize) => {
        dispatch(getPersons({ page, pageSize }));
    };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'BasicInclusion', headerName: 'Базовое включение', width: 300 },
        { field: 'CategoryPerson', headerName: 'Категория физического лица', width: 200 },
        { field: 'DateInclusion', headerName: 'Дата включения', width: 150 },
        { field: 'Name', headerName: 'Name', width: 150 },
        { field: 'Surname', headerName: 'Surname', width: 150 },
        { field: 'DateOfBirth', headerName: '13.05.1987', width: 150 },
        { field: 'PlaceBirth', headerName: 'Место Рождения', width: 150 },
    ];

    console.log('Persons state:', foundPersons);
    console.log('IsLoading state:', isLoading);
    console.log('Error state:', error);
    console.log('Total:', total);  // Check the total number of persons

    return <Table data={foundPersons} columns={columns} isLoading={isLoading} total={total} loadPage={loadPage} />;
    // return (
    //     <div><p>asdfhasjdh</p></div>
    // )
};

export default FoundPerson;
