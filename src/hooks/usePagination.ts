import { useEffect, useMemo, useState } from 'react';
import type { NasaEpicDataTypesForDates } from '../data/NasaEpicDataTypes.ts';

export function usePagination(data: NasaEpicDataTypesForDates[], itemsPerPage = 10) {

    const [currentPage, setCurrentPage] = useState(() => {
        return Number(localStorage.getItem("epicDataCurrentPage")) || 1;
    });

    useEffect(() => {
        localStorage.setItem("epicDataCurrentPage", String(currentPage));
    }, [currentPage]);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginationData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        paginationData
    }
}