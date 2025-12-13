import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useNasaItem } from '../hooks/useNasaItem.ts';

function SearchItem() {
    const { nasaId } = useParams();
    const {metadata, images, loading} = useNasaItem(nasaId);

    useEffect(() => {
        console.log('Assets:', images);
    }, [images]);

    return (<div>
        <h1>{metadata?.['AVAIL:Title']}</h1>
        <p>{metadata?.['AVAIL:Description']}</p>
        {loading ? <p>Loading...</p> : null}
    </div>
    );
}

export default SearchItem;