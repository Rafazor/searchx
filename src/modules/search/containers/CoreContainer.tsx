import SearchFieldContainer from './SearchFieldContainer.tsx';
import SearchResultsContainer from './SearchResultsContainer.tsx';
import SearchProvider from '../providers/SearchProvider.tsx';
import SearchLayoutUi from '../ui/SearchLayoutUi.tsx';

export default function CoreContainer() {
    return (
        <SearchProvider>
            <SearchLayoutUi>
                <SearchFieldContainer />
                <SearchResultsContainer />
            </SearchLayoutUi>
        </SearchProvider>
    );
}
