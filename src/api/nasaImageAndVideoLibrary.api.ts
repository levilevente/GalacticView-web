import axios from 'axios';

import type {
    NasaImageAndVideoLibraryItemAssetType,
    NasaImageAndVideoLibraryItemMetadataType,
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

export async function searchNasaLibraryMetadata(nasaId: string): Promise<NasaImageAndVideoLibraryItemMetadataType> {
    const res1 = await nasaEpicApi.get<{ location: string }>(`/metadata/${nasaId}`);
    const location: string = res1.data.location;
    const res2 = await axios.get<NasaImageAndVideoLibraryItemMetadataType>(location);
    return res2.data;
}
