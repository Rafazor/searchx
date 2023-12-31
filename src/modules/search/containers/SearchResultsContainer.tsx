import { SearchContext } from '../providers/SearchProvider.tsx';
import { useContext } from 'react';
import SearchResultUi from '../ui/SearchResulElementUi.tsx';
import NoResultUi from '../ui/NoResultUi.tsx';

export default function SearchResultsContainer() {
    const { searchElements, isFirstSearch } = useContext(SearchContext);

    if (!isFirstSearch && searchElements.length === 0) return <NoResultUi />;

    return (
        <div className="searchElementWrapper">
            {searchElements.map(element => (
                <SearchResultUi key={element.id} element={element} />
            ))}
        </div>
    );
}
