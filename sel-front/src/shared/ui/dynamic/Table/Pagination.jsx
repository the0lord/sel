import React, { useState, useEffect } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const [visiblePages, setVisiblePages] = useState([]);

    const handlePageChange = (page) => {
        let npage = page;
        if (page == "<<") {
            npage = 1
        }
        else if (page == ">>") {
            npage = totalPages
        }
        onPageChange(npage);
        updateVisiblePages(npage, totalPages);
    };

    const updateVisiblePages = (currentPage, totalPages) => {
        const visibleRange = 3; // Number of pages to show on each side of the current page
        const startPage = Math.max(currentPage - visibleRange, 1);
        const endPage = Math.min(currentPage + visibleRange, totalPages);
        const visiblePages = [];

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }

        if (startPage > 1) {
            visiblePages.unshift('<<');
        }

        if (endPage < totalPages) {
            visiblePages.push('>>');
        }

        setVisiblePages(visiblePages);
    };

    React.useEffect(() => {
        updateVisiblePages(currentPage, totalPages);
    }, [currentPage, totalPages]);

    return (
        <div className="flex pt-5 space-x-1 text-gray-700 select-none">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            {visiblePages.map((page, index) => (
                <button
                    key={`page-${page}`}
                    onClick={() => handlePageChange(page)}
                    disabled={page === currentPage}
                    className={`rounded-md px-4 py-2 transition duration-300 ${page === currentPage
                        ? 'bg-gray-400 text-white'
                        : 'bg-gray-200 hover:bg-gray-400'
                        }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;