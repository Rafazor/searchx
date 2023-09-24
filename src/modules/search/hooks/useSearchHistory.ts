import useLocalStorage from '../../shared/hooks/useLocalStorage.ts';
import { ISuggestion } from '../../shared/types/index.ts';

export default function useSearchHistory() {
    const [suggestionsHistory, setSuggestionsHistory] = useLocalStorage<
        ISuggestion[]
    >('suggestionsHistory', []);

    const saveSuggestion = (suggestion: ISuggestion) => {
        const hasSuggestion = suggestionsHistory.find(
            history =>
                history.title.toLowerCase() === suggestion.title.toLowerCase(),
        );

        if (hasSuggestion) return;

        setSuggestionsHistory([suggestion, ...suggestionsHistory]);
    };

    const removeSuggestion = (suggestion: ISuggestion) => {
        const hasSuggestion = suggestionsHistory.find(
            history => history.id === suggestion.id,
        );

        if (!hasSuggestion) return;

        setSuggestionsHistory(
            suggestionsHistory.filter(item => item.id !== suggestion.id),
        );
    };

    return {
        suggestionsHistory,
        saveSuggestion,
        removeSuggestion,
    };
}
