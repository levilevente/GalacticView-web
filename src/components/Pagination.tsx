import Pagination from 'react-bootstrap/Pagination';
import { usePagination } from '../hooks/usePagination.ts';
import { useNasaEpicDataDates } from '../query/nasaEpicData.query.ts';
import React from 'react';

const paginationStyle: React.CSSProperties = {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    padding: '1em 0',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
}

function PaginationEpic() {
    const { data: dates = [] } = useNasaEpicDataDates();
    const {currentPage, setCurrentPage, totalPages} = usePagination(dates, 10);
    const {start, end} = getRangeArray(currentPage, totalPages);

    return (
        <Pagination style={paginationStyle}>
            {}
            <Pagination.First onClick={() => {setCurrentPage(1)}} />
            <Pagination.Prev onClick={() => {setCurrentPage(currentPage - 1)}}/>
            {Array.from({length: end - start + 1}, (_, index) => {
                const pageNumber = start + index;
                return (
                    <Pagination.Item
                        key={pageNumber}
                        active={pageNumber === currentPage}
                        onClick={() => {setCurrentPage(pageNumber)}}
                        disabled={pageNumber === currentPage}
                    >
                        {pageNumber}
                    </Pagination.Item>
                );
            }
            )}
            <Pagination.Next onClick={() => {setCurrentPage(currentPage + 1)}}/>
            <Pagination.Last onClick={() => {setCurrentPage(totalPages )}}/>
        </Pagination>
    );
}

type RangeType = {
    start: number,
    end: number
}

function getRangeArray(currentPage: number, totalPages: number): RangeType {
    let start = currentPage - 3;
    let end = currentPage + 3;

    if (start < 1) {
        start = 1;
        end = Math.min(7, totalPages);
    }

    if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, totalPages - 6);
    }

    return {start, end};
}


export default PaginationEpic;