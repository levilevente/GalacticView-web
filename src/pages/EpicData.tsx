import PaginationEpic from '../components/epicdata/PaginationEpic.tsx';
import { usePagination } from '../hooks/usePagination.ts';
import { useNasaEpicDataDates } from '../query/nasaEpicData.query.ts';
import { useMemo } from 'react';

function EpicData() {
    const { data: dates = [] } = useNasaEpicDataDates();
    const { currentPage, itemsPerPage, goToPage, totalPages } = usePagination(dates);

    const epicDataDates = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return dates.slice(start, start + itemsPerPage).map(d => d.date);
    }, [dates, currentPage, itemsPerPage]);

    return (
        <div>
            {epicDataDates.map(dateStr => (
                <div key={dateStr}>
                    <h3>{dateStr}</h3>
                </div>
            ))}
            <PaginationEpic goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
}

export default EpicData;