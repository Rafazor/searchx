import { SearchContext } from '../providers/SearchProvider.tsx';
import { useContext } from 'react';

export default function SearchResultsContainer() {
    const { searchElements } = useContext(SearchContext);

    return (
        <div>
            {searchElements.map(element => (
                <div key={element.id}>{element.title}</div>
            ))}
        </div>
    );
}
