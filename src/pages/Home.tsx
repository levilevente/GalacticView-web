import { useNasaEpicDataDates } from '../query/nasaEpicData.query.ts';

function Home() {
    const { data: images = [], isError } = useNasaEpicDataDates();

    return (
        <div>
            <h2>Welcome to GalacticView</h2>
            <p>Your gateway to the stars.</p>
            {isError && <p>Error loading images. Please try again later.</p>}
            <div>
                {images.length > 0 ? (
                    images.map((image) => (
                        <p>
                            {image.date}
                        </p>
                    ))
                ) : (
                    <p>Loading images...</p>
                )}
            </div>
        </div>
    );
}

export default Home;