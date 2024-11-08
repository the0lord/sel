import { useDispatch, useSelector } from "react-redux";
import Table from "shared/ui/dynamic/Table/Table";


const NeedsList = () => {
    // const dispatch = useDispatch();
    // const { foundOrganizations, isLoading, error, total } = useSelector(state => state.found);
    const needs = [
        {
            ID: 1,
            Name: "hi",
            UnitOfMeasure: "kg",
            Amount: 10
        }
    ]

    // const loadPage = (page, pageSize) => {
    //     dispatch(getOrganizations({ page, pageSize }));
    // };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Название культуры', width: 150 },
        { field: 'UnitOfMeasure', headerName: 'Единица измерения', width: 150 },
        { field: 'Amount', headerName: 'Количество', width: 50 },
    ];

    return <Table
        data={needs}
        columns={columns}
        isLoading={false}
        total={2}
        loadPage={(page, pageSize) => { }}
    />;
}

export default NeedsList;