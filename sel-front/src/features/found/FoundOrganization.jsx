import { useDispatch, useSelector } from 'react-redux';
import Table from 'shared/ui/dynamic/Table/Table';
import { getOrganizations } from '../../shared/store/reducer/found.reducer';

const FoundOrganization = () => {
    const dispatch = useDispatch();
    const { foundOrganizations, isLoading, error, total } = useSelector(state => state.found);



    const loadPage = (page, pageSize) => {
        dispatch(getOrganizations({ page, pageSize }));
    };

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'Name', headerName: 'Name', width: 150 },
    ];

    return <Table data={foundOrganizations} columns={columns} isLoading={isLoading} total={total} loadPage={loadPage} />;
    // return (
    //     <div><p>45674567456</p></div>
    // )
};

export default FoundOrganization;
