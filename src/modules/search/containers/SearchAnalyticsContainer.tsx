import { useContext } from 'react';
import { SearchContext } from '../providers/SearchProvider.tsx';

export default function SearchAnalyticsContainer() {
    const { executionTime, searchElements, isFirsSearch } =
        useContext(SearchContext);

    if (isFirsSearch || searchElements.length === 0) return null;

    return (
        <p className="analytics">{`About ${searchElements.length} results (${executionTime} ms)`}</p>
    );
}
