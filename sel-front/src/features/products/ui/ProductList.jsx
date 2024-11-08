import { useDispatch, useSelector } from "react-redux";
import Table from "shared/ui/dynamic/Table/Table";


const ProductList = () => {
    // const dispatch = useDispatch();
    // const { foundOrganizations, isLoading, error, total } = useSelector(state => state.found);
    const products = [
        {
            ID: 1,
            Name: "hi",
            UnitOfMeasure: "kg"
        }
    ]

    // const loadPage = (page, pageSize) => {
    //     dispatch(getOrganizations({ page, pageSize }));
    // };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Название культуры', width: 150 },
        { field: 'UnitOfMeasure', headerName: 'Единица измерения', width: 150 },
    ];

    return <Table
        data={products}
        columns={columns}
        isLoading={false}
        total={2}
        loadPage={(page, pageSize) => { }}
    />;
}

export default ProductList;