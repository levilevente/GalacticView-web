import type {
    NasaImageAndVideoLibraryItemType,
    NasaImageAndVideoLibraryType,
} from '../../types/NasaImageAndVideoLibraryType.ts';
import style from './SearchResults.module.css';

interface SearchResultsProps {
    results: NasaImageAndVideoLibraryType | null;
}

function SearchResults(props: SearchResultsProps) {
    const { results } = props;
    const items: NasaImageAndVideoLibraryItemType[] = results ? getDistinctItemsByTitle(results.collection.items) : [];

    const clickedItem = (item: NasaImageAndVideoLibraryItemType) => {
        // eslint-disable-next-line no-console
        console.log(item.data[0]);
        // eslint-disable-next-line no-console
        item.links.forEach((link) => console.log(link.href));
    };

    return (
        <div className={style.searchResultsContainer}>
            {items.length === 0 ? (
                <p>Error FIX IT</p>
            ) : (
                /*Only the top 5 distinct based on title*/
                items.slice(0, 5).map((item, i) => (
                    <div
                        className={style.searchResultsItem}
                        key={`${item.data[0].title}-${i}`}
                        onClick={() => clickedItem(item)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                clickedItem(item);
                            }
                        }}
                    >
                        <p>{item.data[0].title}</p>
                    </div>
                ))
            )}
        </div>
    );
}

function getDistinctItemsByTitle(items: NasaImageAndVideoLibraryItemType[]): NasaImageAndVideoLibraryItemType[] {
    const allValues = items.map((item) => item.data[0].title);

    const uniqueValues = Array.from(new Set(allValues));

    const distinctItems: NasaImageAndVideoLibraryItemType[] = [];

    uniqueValues.forEach((title) => {
        const foundItem = items.find((item) => item.data[0].title === title);
        if (foundItem) {
            distinctItems.push(foundItem);
        }
    });

    return distinctItems;
}

export default SearchResults;
