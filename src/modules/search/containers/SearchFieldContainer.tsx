import SearchFieldUi from '../ui/SearchFieldUi.tsx';
import useSearchForm from '../hooks/useSearchForm.ts';
import useSuggestions from '../hooks/useSuggestions.ts';

export default function SearchFieldContainer() {
    const { value, setValue, onSubmit } = useSearchForm();
    const { suggestions } = useSuggestions(value);

    return (
        <>
            <SearchFieldUi
                value={value}
                onChange={setValue}
                onSubmit={onSubmit}
                suggestions={suggestions}
            />
        </>
    );
}
