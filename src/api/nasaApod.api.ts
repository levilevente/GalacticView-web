import axios from 'axios';
import type { NasaApodDataType } from '../data/NasaApodDataType.ts';

const API_KEY = import.meta.env.VITE_NASA_API_KEY ?? 'DEMO_KEY';

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
    console.log('getNasaApodData');
    console.log('URL with api key:', `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const res = await nasaEpicApi.get('');
    return res.data;
}