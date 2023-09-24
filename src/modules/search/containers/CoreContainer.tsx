import SearchFieldContainer from './SearchFieldContainer.tsx';
import SearchResultsContainer from './SearchResultsContainer.tsx';
import SearchProvider from '../providers/SearchProvider.tsx';
import SearchLayoutUi from '../ui/SearchLayoutUi.tsx';
import SearchAnalyticsContainer from './SearchAnalyticsContainer.tsx';

export default function CoreContainer() {
    return (
        <SearchProvider>
            <SearchLayoutUi>
                <h1>SearchX</h1>
                <SearchFieldContainer />
                <SearchAnalyticsContainer />
                <SearchResultsContainer />
            </SearchLayoutUi>
        </SearchProvider>
    );
}
