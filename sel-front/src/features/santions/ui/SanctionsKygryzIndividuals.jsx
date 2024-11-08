import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from "shared/ui/dynamic/Table/Table";
import { getKyrgyzIndividuals } from 'shared/store/reducer/sanctions.reducer';

const SanctionsKyrgyzIndividual = () => {
    const dispatch = useDispatch();

    console.log(useSelector(state => state.santions));
    const { kyrgyzIndividuals, isLoading, error, totalPages } = useSelector(state => state.sanctions);


    const loadPage = (page, pageSize) => { dispatch(getKyrgyzIndividuals({ page, pageSize })) };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'BasicInclusion', headerName: 'Базовое включение', width: 300 },
        { field: 'CategoryPerson', headerName: 'Категория физического лица', width: 200 },
        { field: 'DateInclusion', headerName: 'Дата включения', width: 150 },
        { field: 'Name', headerName: 'Имя', width: 150 },
        { field: 'Surname', headerName: 'Фамилия', width: 150 },
    ]

    return <Table data={kyrgyzIndividuals} columns={columns} isLoading={isLoading} total={totalPages} loadPage={loadPage} />
}

export default SanctionsKyrgyzIndividual;
