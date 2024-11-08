
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoggers } from '../../../store/reducer/loggers.reducer';
import Pagination from '../Table/Pagination';

const DropDawn = () => {
    const dispatch = useDispatch();
    const { persons, isLoading, error, total } = useSelector(state => state.loggers);

    const [data, setData] = useState([]);
    const [{ page, pageSize }, setPagination] = useState({
        page: 1,
        pageSize: 10
    });

    const loadPage = (page, pageSize) => {
        dispatch(fetchLoggers({ page, pageSize }));
    };

    const onFetchLoggers = () => {
        loadPage(page, pageSize);
    };

    useEffect(() => {
        setData(persons);
    }, [persons]);

    const columns = [
        { field: 'ID', headerName: '#', width: 50 },
        { field: 'CreatedAt', headerName: 'CreatedAt', width: 150 },
        { field: 'Api', headerName: 'Api', width: 150 },
    ];

    const onPageChange = (page) => {
        setPagination(obj => ({ ...obj, page }));
        // Refetch data for the new page
        loadPage(page, pageSize);
    };

    return (
        <>
            <div className="flex justify-between mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={onFetchLoggers}
                >
                    Fetch Loggers
                </button>
            </div>
            <div className="overflow-auto max-h-160">
                <table className="min-w-full">
                    <thead className="bg-gray-200 border-b top-0 sticky">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.field}
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    style={{ width: `${column.width}px` }}
                                >
                                    {column.headerName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={`row-${index}`}
                                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                            >
                                {columns.map((column) => (
                                    <td
                                        key={`${row.ID}-${column.field}`}
                                        className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal"
                                    >
                                        {row[column.field] || ''}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                totalPages={Math.ceil(total / pageSize)}
                currentPage={page}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default DropDawn;