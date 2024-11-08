import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsThunk } from 'shared/store/reducer/products.reduder';
import Table from "shared/ui/dynamic/Table/Table";
const ProductList = () => {
    const { products } = useSelector(({ products }) => products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsThunk());
    }, []);

    const columns = [
        { field: 'id', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Название культуры', width: 150 },
        { field: 'UnitOfMeasure', headerName: 'Единица измерения', width: 150 },
    ]



    return <Table
        data={products}
        columns={columns}
        isLoading={false}
        total={2}
        loadPage={(page, pageSize) => { }}
    />;
};

export default ProductList;