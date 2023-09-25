import { useState } from 'react';
import { searchResultElements } from '../helpers/index.ts';
import { uuidv4 } from '../../shared/helpers/index.ts';
import { ISearchElement, ISuggestion } from '../../shared/types/index.ts';
import { MOCK_DATA } from '../../../data/index.ts';

export default function useSearchForm(
    saveSuggestion: (suggestion: ISuggestion) => void,
    setSearchElements: (elements: ISearchElement[]) => void,
    setIsFirstSearch: (isFirstSearch: boolean) => void,
    setExecutionTime: (number: string) => void,
) {
    const [value, setValue] = useState('');

    const onSubmit = (value: string) => {
        if (!value) return;

        const start = performance.now();

        const elements = searchResultElements(MOCK_DATA, value);
        setSearchElements(elements);
        setIsFirstSearch(false);
        saveSuggestion({
            title: value,
            isHistory: true,
            id: uuidv4(),
        });

        const end = performance.now();
        const timeTaken = end - start;
        setExecutionTime(timeTaken.toFixed(2));
    };

    return {
        value,
        setValue,
        onSubmit,
    };
}
