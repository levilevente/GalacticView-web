import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

import { useNasaItem } from '../hooks/useNasaItem.ts';
import style from './SearchItem.module.css';

function SearchItem() {
    const { nasaId } = useParams();
    const { metadata, image, loading } = useNasaItem(nasaId);

    useEffect(() => {
        console.log('Assets:', image);
    }, [image]);

    if (loading) {
        return (
        <div className={style.searchItemContainer}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        );
    }

    return (
        <div className={style.searchItemContainer}>
            <div className={style.leftDiv}>
                <h3>{metadata?.['AVAIL:Title']}</h3>
                <p>{metadata?.['AVAIL:Description']}</p>
            </div>
            <div className={style.rightDiv}>
                {loading ? <p>Loading...</p> : null}
                {!loading && image ? <div>
                    <img className={style.image} src={image} alt={metadata?.['AVAIL:Title']} />
                </div> : null}
            </div>
        </div>
    );
}

export default SearchItem;