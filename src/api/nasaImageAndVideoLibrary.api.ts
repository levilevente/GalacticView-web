import axios from 'axios';

import type {
    NasaImageAndVideoLibraryItemAssetType,
    NasaImageAndVideoLibraryType,
} from '../types/NasaImageAndVideoLibraryType.ts';

export const nasaEpicApi = axios.create({
    baseURL: `https://images-api.nasa.gov`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export async function searchNasaLibrary(query: string): Promise<NasaImageAndVideoLibraryType> {
    const res = await nasaEpicApi.get<NasaImageAndVideoLibraryType>(`/search?q=${query}`);
    return res.data;
}

export async function searchNasaLibraryAsset(nasaId: string): Promise<NasaImageAndVideoLibraryItemAssetType> {
    const res = await nasaEpicApi.get<NasaImageAndVideoLibraryItemAssetType>(`/asset/${nasaId}`);
    return res.data;
}
