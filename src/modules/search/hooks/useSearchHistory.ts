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

        console.log({ suggestion, suggestionsHistory });

        setSuggestionsHistory([suggestion, ...suggestionsHistory]);
    };

    const removeSuggestion = (suggestion: ISuggestion) => {
        const hasSuggestion = suggestionsHistory.find(
            history => history.id === suggestion.id,
        );

        console.log({ hasSuggestion, suggestion });

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
