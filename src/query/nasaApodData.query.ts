import { useQuery } from '@tanstack/react-query';
import { getNasaApodData } from '../api/nasaApod.api.ts';
import { queryClient } from './common.query.ts';

export function useNasaApodData() {
    const query = useQuery({
        queryKey: ['nasaApodData'],
        queryFn: getNasaApodData,
    });

    const refetchWithInvalidation = async () => {
        await queryClient.invalidateQueries({queryKey: ['nasaApodData']});
        return query.refetch();
    }

    return {...query, refetchWithInvalidation};
}