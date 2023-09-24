import { useEffect, useState } from 'react';
import { ISuggestion } from '../../shared/types/index.ts';
import {
    generateSuggestions,
    searchElements,
    searchSuggestions,
} from '../helpers/index.ts';
import { MOCK_DATA } from '../../../data/searchData.ts';

export default function useSuggestions(
    value: string,
    suggestionsHistory: ISuggestion[],
) {
    const [suggestions, setSuggestions] = useState<ISuggestion>([]);

    useEffect(() => {
        if (!value) return setSuggestions(suggestionsHistory);

        const elements = searchElements(MOCK_DATA, value);
        const suggestionsList = generateSuggestions(elements);
        const historySuggestionsList = searchSuggestions(
            suggestionsHistory,
            value,
        );

        if (suggestionsList.length === 0 && historySuggestionsList.length === 0)
            return setSuggestions([]);

        setSuggestions(
            [...historySuggestionsList, ...suggestionsList].slice(0, 10),
        );
    }, [value, suggestionsHistory]);

    return {
        suggestions,
    };
}
