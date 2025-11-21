import { useEffect, useState } from 'react';

import ImageOfTheDayContainer from '../components/imageoftheday/ImageOfTheDayContainer.tsx';
import ImageOfTheDayHistory from '../components/imageoftheday/ImageOfTheDayHistory.tsx';

function ImageOfTheDayPage() {
    const [searchedDate, setSearchedDate] = useState<Date | null>(null);

    useEffect(() => {
        console.log("Searched date changed:", searchedDate);
    }, [searchedDate]);

    return (
        <div>
            <ImageOfTheDayContainer />
            <ImageOfTheDayHistory setSearchedDate={setSearchedDate} key="today"/>
            {searchedDate ?
                <div>
                    <ImageOfTheDayContainer date={searchedDate} key={searchedDate.toISOString()}/>
                </div> : <></>
            }
        </div>
    );
}

export default ImageOfTheDayPage;