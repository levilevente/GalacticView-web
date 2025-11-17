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
};

const carouselCss = {
    fontSize: '1.5rem',
    width: '40rem',
    height: '40rem',
};

const centerStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
};

const mainContainerStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8rem',
    padding: '2rem',
};

const leftContainerStyle: CSSProperties = {
    flex: 1,
    minWidth: '300px',
    maxWidth: '600px',
};

const rightContainerStyle: CSSProperties = {
    flex: 1,
    minWidth: '300px',
    maxWidth: '600px',
    marginTop: '2rem',
};

function EpicDataPostPage() {
    const { epicDataDate } = useParams<{ epicDataDate: string }>();
    const { data, isLoading, isError, error } = useNasaEpicDataByDate(epicDataDate || '');


    return (
        <div>
            {isError && <p>Error: {error instanceof Error ? error.message : 'Unknown error'}</p>}
            {data && (
                <div style={centerStyle}>
                    {isLoading && <Spinner animation="border" />}
                    <div style={mainContainerStyle}>
                        <div style={leftContainerStyle}>
                            <h2>NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</h2>
                            <p className={'paragraph-under-heading'}>
                                The stunning "Blue Marble" images of the full, sunlit side of Earth are captured daily by the Earth Polychromatic Imaging Camera (EPIC) aboard NOAA's Deep Space Climate
                                Observatory (DSCOVR) satellite. Positioned a million miles away, DSCOVR provides a unique, continuous view of our dynamic planet as it rotates, offering a fresh
                                perspective on weather patterns, clouds, and natural landscapes.
                            </p>
                            <h3>
                                Camera and Satellite
                            </h3>
                            <p>
                                The Earth Polychromatic Imaging Camera (EPIC) is the instrument, and it is mounted on the Deep Space Climate Observatory (DSCOVR) satellite.
                            </p>
                            <h3>
                                Location
                            </h3>
                            <p>
                                The satellite is positioned about a million miles away, between the Earth and the sun, which allows it to capture the entire sunlit side of the planet.
                            </p>
                            <h3>
                                Image Capture
                            </h3>
                            <p>
                                EPIC takes multiple images of Earth's sunlit face each day, with each full-color image being a composite of three separate images.
                            </p>
                        </div>
                        <div style={rightContainerStyle}>
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default EpicDataPostPage;