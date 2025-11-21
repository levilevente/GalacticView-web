import { useNasaApodData } from '../../query/nasaApodData.query';
import ImageOfTheDay from './ImageOfTheDay.tsx';

interface ImageOfTheDayContainerProps {
    date?: Date | null;
}

function ImageOfTheDayContainer(props: ImageOfTheDayContainerProps) {
    const { date } = { ...props };
    const { data, isLoading, isError } = useNasaApodData(date);

    if (isLoading) return <p style={{ marginLeft: '10rem' }}>Loading...</p>;
    if (isError) return <p style={{ marginLeft: '10rem' }}>Failed to load image of the day.</p>;
    if (!data) return null;

    return <ImageOfTheDay data={data} />;
}

export default ImageOfTheDayContainer;