import { SearchContext } from '../providers/SearchProvider.tsx';
import { useContext } from 'react';
import SearchResultUi from '../ui/SearchResulElementUi.tsx';

export default function SearchResultsContainer() {
    const { searchElements } = useContext(SearchContext);

    return (
        <div className="searchElementWrapper">
            {searchElements.map(element => (
                <SearchResultUi key={element.id} element={element} />
            ))}
        </div>
    );
}
