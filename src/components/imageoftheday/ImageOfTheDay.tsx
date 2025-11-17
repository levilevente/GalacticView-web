import { useNasaApodData } from '../../query/nasaApodData.query.ts';
import type { NasaApodDataType } from '../../data/NasaApodDataType.ts';
import React from 'react';

const imageOfTheDayStyles: React.CSSProperties = {
    marginLeft: '10rem',
    marginTop: '5rem',
    display: 'flex',
}

const leftDivStyles: React.CSSProperties = {
    flex: 1,
    marginRight: '2rem',
}

const rightDivStyles: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '9rem',
}

const imageStyles: React.CSSProperties = {
    width: '100%',        // fill container width
    height: 'auto',       // preserve aspect ratio
    maxHeight: '30rem',   // prevents extreme vertical stretching
    objectFit: 'contain',
}

interface ImageOfTheDayProps {
    data?: NasaApodDataType;
}

function ImageOfTheDay(props: ImageOfTheDayProps) {
    const { data: queryData } = useNasaApodData();
    const data = props.data || queryData;

    return (
        <div style={imageOfTheDayStyles} className="imageOfTheDay">
            <div style={leftDivStyles}>
                <p className={'section-tagline'}>TODAY</p>
                <h1>Image of the Day</h1>
                <h3>{data?.title}</h3>
                <p>{data?.explanation}</p>
            </div>
            <div style={rightDivStyles}>
                {data?.media_type === 'image' ? (
                    <img style={imageStyles} src={data?.hdurl} alt={data?.title} />
                ) : data?.media_type === 'video' ? (
                    <iframe
                        width="560"
                        height="315"
                        src={data?.url}
                        title={data?.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <p>Media type not supported.</p>
                )}
            </div>
        </div>
    );
}

export default ImageOfTheDay;