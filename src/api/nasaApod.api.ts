import axios from 'axios';
import type { NasaApodDataType } from '../data/NasaApodDataType.ts';

const API_KEY = import.meta.env.NASA_API_KEY ?? 'DEMO_KEY';

export const nasaEpicApi = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    params: {
        api_key: API_KEY,
    }
});

export async function getNasaApodData(): Promise<NasaApodDataType> {
    const res = await nasaEpicApi.get('');
    return res.data;
}