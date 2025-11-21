import { useState } from 'react';

import ImageOfTheDayContainer from '../components/imageoftheday/ImageOfTheDayContainer.tsx';
import ImageOfTheDayHistory from '../components/imageoftheday/ImageOfTheDayHistory.tsx';

function ImageOfTheDayPage() {
    const [searchedDate, setSearchedDate] = useState<Date | null>(null);
    return (
        <div>
            <ImageOfTheDayContainer />
            <ImageOfTheDayHistory setSearchedDate={setSearchedDate} />
            {searchedDate ? <div>
                    <h2>Images for {searchedDate.toDateString()}</h2>
                </div> : <></>
            }
        </div>
    );
}

export default ImageOfTheDayPage;