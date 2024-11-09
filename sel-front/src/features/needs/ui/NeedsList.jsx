import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeftThunk, fetchNeedsThunk } from 'shared/store/reducer/needs.reducer';
import Table from "shared/ui/dynamic/Table/Table";
const NeedsList = () => {
    const { needs, count, score } = useSelector(({ needs }) => needs);
    const dispatch = useDispatch();
    const [selectedNeed, setSelectedNeed] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const loadPage = (page, pageSize) => {
        dispatch(fetchNeedsThunk({ page, pageSize }));
    }

    const columns = [
        { field: 'quantity', headerName: 'Количество', width: 50 },
        { field: 'start_date', headerName: 'Начальная дата', width: 150 },
        { field: 'end_date', headerName: 'Конечная дата', width: 150 },
        { field: 'product.name', headerName: 'Название культуры', width: 150 },
        { field: 'product.measurement_unit', headerName: 'Единица измерения', width: 150 },
        { field: 'region.name', headerName: 'Область', width: 150 },
    ]

    const handleClick = (row) => {
        dispatch(fetchLeftThunk(row.id))
        setSelectedNeed(row);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNeed(null);
    }

    return <>
        <Table
            onClick={handleClick}
            data={needs}
            columns={columns}
            isLoading={false}
            total={count}
            loadPage={loadPage}
        />
        {isModalOpen && selectedNeed && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Детали потребности</h3>
                        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-4">
                        <div className="space-y-3">
                            <p><span className="font-semibold">{score > 0 ? "Дефицит: " : "Избыток: "}</span> {score}</p>
                            <p><span className="font-semibold">Количество:</span> {selectedNeed.quantity}</p>
                            <p><span className="font-semibold">Начальная дата:</span> {selectedNeed.start_date}</p>
                            <p><span className="font-semibold">Конечная дата:</span> {selectedNeed.end_date}</p>
                            <p><span className="font-semibold">Название культуры:</span> {selectedNeed.product?.name}</p>
                            <p><span className="font-semibold">Единица измерения:</span> {selectedNeed.product?.measurement_unit}</p>
                            <p><span className="font-semibold">Область:</span> {selectedNeed.region?.name}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>;
};
export default NeedsList;