import axios from 'axios';
import type { NasaEpicDataType, NasaEpicDataTypesForDates } from '../data/NasaEpicDataTypes.ts';

//const API_KEY = import.meta.env.NASA_API_KEY ?? 'DEMO_KEY';

export const nasaEpicApi = axios.create({
    baseURL: `https://epic.gsfc.nasa.gov/api/natural/`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    /*params: {
        api_key: API_KEY,
    }*/
});

export async function getNasaEpicData(): Promise<NasaEpicDataType[]> {
    const res = await nasaEpicApi.get('');
    return res.data;
}

export async function getNasaEpicDataAllDates(): Promise<NasaEpicDataTypesForDates[]> {
    const res = await nasaEpicApi.get('/all');
    return res.data;
}

export async function getNasaEpicDataByDate(date: string): Promise<NasaEpicDataType[]> {
    const res = await nasaEpicApi.get(`/date/${date}`);
    return res.data;
}
