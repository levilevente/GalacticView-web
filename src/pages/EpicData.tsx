import PaginationEpic from '../components/epicdata/PaginationEpic.tsx';
import { usePagination } from '../hooks/usePagination.ts';
import { useNasaEpicDataDates } from '../query/nasaEpicData.query.ts';
import React, { useMemo } from 'react';
import EpicDataCard from '../components/epicdata/EpicDataCard.tsx';

const epicDataStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
};

function EpicData() {
    const { data: dates = [] } = useNasaEpicDataDates();
    const { currentPage, itemsPerPage, goToPage, totalPages } = usePagination(dates);

    const epicDataDates = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return dates.slice(start, start + itemsPerPage).map((d) => d.date);
    }, [dates, currentPage, itemsPerPage]);

    return (
        <div style={epicDataStyle}>
            {epicDataDates.map((dateStr) => (
                <EpicDataCard date={dateStr} key={dateStr} />
            ))}
            <PaginationEpic goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
}

export default EpicData;
