import type { NasaApodDataType } from '../../data/NasaApodDataType.ts';
import { getUTCDateString } from '../../utils/dateUtils.ts';
import style from './ImageOfTheDay.module.css';

interface ImageOfTheDayProps {
    data?: NasaApodDataType;
}

function ImageOfTheDay(props: ImageOfTheDayProps) {
    const data = props.data;
    const today = new Date();
    const todayString = getUTCDateString(today);

    return (
        <div className={`imageOfTheDay ${style.imageOfTheDayContainer}`}>
            <div className={style.leftDiv}>
                {data?.date === todayString ? (
                    <>
                        <p className={'section-tagline'}>TODAY</p>
                        <h1>Image of the Day</h1>
                    </>
                ) : (
                    <h2 className={'section-tagline'}>{data?.date}</h2>
                )}
                <h3>{data?.title}</h3>
                <p>{data?.explanation}</p>
            </div>
            <div className={style.rightDiv}>
                {data?.media_type === 'image' ? (
                    <img className={style.image} src={data?.hdurl} alt={data?.title} />
                ) : data?.media_type === 'video' ? (
                    <iframe
                        width="560"
                        height="315"
                        src={data?.url}
                        title={data?.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <p>Media type not supported.</p>
                )}
            </div>
        </div>
    );
}

export default ImageOfTheDay;
