import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
    const dispatch = useDispatch();
    const { foundOrganizations, isLoading, error, total } = useSelector(state => state.found);



    const loadPage = (page, pageSize) => {
        dispatch(getOrganizations({ page, pageSize }));
    };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Название культуры', width: 150 },
        { field: 'UnitOfMeasure', headerName: 'Единица измерения', width: 150 },
    ];

    return <Table data={foundOrganizations} columns={columns} isLoading={isLoading} total={total} loadPage={loadPage} />;
}

export default ProductList;