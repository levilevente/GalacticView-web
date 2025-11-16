import { useNasaApodData } from '../../query/nasaApodData.query.ts';
import type { NasaApodDataType } from '../../data/NasaApodDataType.ts';

function ImageOfTheDay() {
    const {data: NasaApodDataType} = useNasaApodData();

    return (
        <div>
            <p>Today</p>
            <h2>Image of the Day</h2>
            <h3>{data.title}</h3>
            <p>{data.explanation}</p>
        </div>
    )
}

export default ImageOfTheDay;