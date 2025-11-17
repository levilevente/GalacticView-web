import { useParams } from 'react-router';
import { useNasaEpicDataByDate } from '../query/nasaEpicData.query.ts';
import { Carousel, Spinner } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import type { CSSProperties } from 'react';

function imageUrl(item: any) {
    return `https://epic.gsfc.nasa.gov/archive/natural/${item.date.slice(0, 4)}/${item.date.slice(5, 7)}/${item.date.slice(8, 10)}/png/${item.image}.png`;
}

const imageCss = {
    width: '100%',
    height: '30%',
    maxHeight: '600px',
    objectFit: 'contain' as const,
}

const carouselCss = {
    fontSize: '1.5rem',
    width: '40rem',
    height: '40rem',
}

const centerStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
}

function EpicDataPostPage() {
    const { epicDataDate } = useParams<{ epicDataDate: string }>();
    const { data, isLoading, isError, error } = useNasaEpicDataByDate(epicDataDate || '');


    return (
        <div>
            {isError && <p>Error: {error instanceof Error ? error.message : 'Unknown error'}</p>}
            {data && (
                <div style={centerStyle}>
                    {isLoading && <Spinner animation="border" />}
                    <h1>Images captured by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</h1>
                    <Carousel fade style={carouselCss} className="carousel">
                        {data.map((item: any) => (
                            <Carousel.Item key={item.identifier}>
                                <Image rounded src={imageUrl(item)} alt="epic" style={imageCss} />
                                <Carousel.Caption style={{ bottom: '-1.0rem' }}>
                                    <p>{item.date}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
}

export default EpicDataPostPage;