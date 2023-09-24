import { useState } from 'react';
import { searchElements } from '../helpers/index.ts';
import { MOCK_DATA } from '../../../data/searchData.ts';
import { uuidv4 } from '../../shared/helpers/index.ts';
import { ISearchElement, ISuggestion } from '../../shared/types/index.ts';

export default function useSearchForm(
    saveSuggestion: (suggestion: ISuggestion) => void,
    setSearchElements: (elements: ISearchElement[]) => void,
    setIsFirstSearch: (isFirstSearch: boolean) => void,
) {
    const [value, setValue] = useState('');

    const onSubmit = (value: string) => {
        if (!value) return;

        const elements = searchElements(MOCK_DATA, value);
        setSearchElements(elements);
        setIsFirstSearch(false);
        saveSuggestion({
            title: value,
            isHistory: true,
            id: uuidv4(),
        });
    };

    return {
        value,
        setValue,
        onSubmit,
    };
}
