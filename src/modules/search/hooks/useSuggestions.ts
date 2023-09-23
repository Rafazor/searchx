import { useEffect, useState } from 'react';
import { ISuggestion } from '../../shared/types/index.ts';
import { generateSuggestions, searchElements } from '../helpers/index.ts';
import { MOCK_DATA } from '../../../data/searchData.ts';

export default function useSuggestions(value: string) {
    const [suggestions, setSuggestions] = useState<ISuggestion>([]);

    useEffect(() => {
        const elements = searchElements([...MOCK_DATA], value);
        const suggestionsList = generateSuggestions(elements);
        if (suggestionsList.length === 0) return setSuggestions(MOCK_DATA);

        setSuggestions(suggestionsList);
    }, [value]);

    return {
        suggestions,
    };
}
