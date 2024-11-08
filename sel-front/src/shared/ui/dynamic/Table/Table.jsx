import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Table = ({ data, columns, total, loadPage }) => {
    const [{ page, pageSize }, setPagination] = useState({
        page: 1,
        pageSize: 10
    });
    useEffect(() => {
        loadPage(page, pageSize);
    }, [page, pageSize])
    const onPageChange = (page) => {
        return setPagination(obj => ({ ...obj, page }))
    }

    return (
        <>
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
                                        key={`${row.id}-${column.field}`}
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
                totalPages={total / pageSize}
                currentPage={page}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default Table;
