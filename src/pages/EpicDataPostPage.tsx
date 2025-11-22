import 'react-medium-image-zoom/dist/styles.css';

import { Carousel, Spinner } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Zoom from 'react-medium-image-zoom';
import { useParams } from 'react-router';

import { useNasaEpicDataByDate } from '../query/nasaEpicData.query.ts';
import type { NasaEpicDataType } from '../types/NasaEpicDataTypes.ts';
import style from './EpicDataPostPage.module.css';

function imageUrl(item: NasaEpicDataType) {
    return `https://epic.gsfc.nasa.gov/archive/natural/${item.date.slice(0, 4)}/${item.date.slice(5, 7)}/${item.date.slice(8, 10)}/png/${item.image}.png`;
}

function EpicDataPostPage() {
    const { epicDataDate } = useParams<{ epicDataDate: string }>();
    const { data, isLoading, isError, error } = useNasaEpicDataByDate(epicDataDate ?? '');

    return (
        <div>
            {isError ? <p>Error: {error instanceof Error ? error.message : 'Unknown error'}</p> : null}
            {data ? (
                <div className={style.centerContainer}>
                    {isLoading ? <Spinner animation="border" /> : null}
                    <div className={style.mainContainer}>
                        <div className={style.leftContainer}>
                            <h2>NASA&#39;s EPIC camera onboard the NOAA DSCOVR spacecraft</h2>
                            <p className={style.paragraphUnderHeading}>
                                The stunning &#34;Blue Marble&#34; images of the full, sunlit side of Earth are captured
                                daily by the Earth Polychromatic Imaging Camera (EPIC) aboard NOAA&#39;s Deep Space
                                Climate Observatory (DSCOVR) satellite. Positioned a million miles away, DSCOVR provides
                                a unique, continuous view of our dynamic planet as it rotates, offering a fresh
                                perspective on weather patterns, clouds, and natural landscapes.
                            </p>
                            <h3>Camera and Satellite</h3>
                            <p>
                                The Earth Polychromatic Imaging Camera (EPIC) is the instrument, and it is mounted on
                                the Deep Space Climate Observatory (DSCOVR) satellite.
                            </p>
                            <h3>Location</h3>
                            <p>
                                The satellite is positioned about a million miles away, between the Earth and the sun,
                                which allows it to capture the entire sunlit side of the planet.
                            </p>
                            <h3>Image Capture</h3>
                            <p>
                                EPIC takes multiple images of Earth&#39;s sunlit face each day, with each full-color
                                image being a composite of three separate images.
                            </p>
                        </div>
                        <div className={style.rightContainer}>
                            <Carousel fade className={style.carouselContainer}>
                                {data.map((item: NasaEpicDataType) => (
                                    <Carousel.Item key={item.identifier}>
                                        <Zoom>
                                            <Image rounded src={imageUrl(item)} alt="epic" className={style.image} />
                                        </Zoom>
                                        <Carousel.Caption className={style.carouselCaption}>
                                            <p>{item.date}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default EpicDataPostPage;
