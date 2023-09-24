import SearchFieldUi from '../ui/SearchFieldUi.tsx';
import useSearchForm from '../hooks/useSearchForm.ts';
import useSuggestions from '../hooks/useSuggestions.ts';
import useSearchHistory from '../hooks/useSearchHistory.ts';
import { useContext } from 'react';
import { SearchContext } from '../providers/SearchProvider.tsx';

export default function SearchFieldContainer() {
    const { setSearchElements, setIsFirstSearch } = useContext(SearchContext);
    const { suggestionsHistory, saveSuggestion, removeSuggestion } =
        useSearchHistory();
    const { value, setValue, onSubmit } = useSearchForm(
        saveSuggestion,
        setSearchElements,
        setIsFirstSearch,
    );
    const { suggestions } = useSuggestions(value, suggestionsHistory);

    return (
        <>
            <SearchFieldUi
                value={value}
                onChange={setValue}
                onSubmit={onSubmit}
                suggestions={suggestions}
                removeSuggestion={removeSuggestion}
            />
        </>
    );
}
