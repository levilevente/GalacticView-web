import { useNavigate } from 'react-router';

import type {
    NasaImageAndVideoLibraryItemType,
    NasaImageAndVideoLibraryType,
} from '../../types/NasaImageAndVideoLibraryType.ts';
import style from './SearchResults.module.css';

interface SearchResultsProps {
    results: NasaImageAndVideoLibraryType | null;
    searchClosedOrSearched: () => void;
}

function SearchResults(props: SearchResultsProps) {
    const { results, searchClosedOrSearched } = props;
    const items: NasaImageAndVideoLibraryItemType[] = results ? getDistinctItemsByTitle(results.collection.items) : [];
    const navigate = useNavigate();

    const clickedItem = async (item: NasaImageAndVideoLibraryItemType) => {
        // eslint-disable-next-line no-console
        console.log(item.data[0]);
        // eslint-disable-next-line no-console
        item.links.forEach((link) => console.log(link.href));
        searchClosedOrSearched();
        await navigate(`/search/item/${item.data[0].nasa_id}`);
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
                        onClick={() => void clickedItem(item)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                void clickedItem(item);
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
