import { useContext, useState } from 'react';
import { SearchContext } from '../providers/SearchProvider.tsx';
import { searchElements } from '../helpers/index.ts';
import { MOCK_DATA } from '../../../data/searchData.ts';

export default function useSearchForm() {
    const [value, setValue] = useState('');
    const { setSearchElements } = useContext(SearchContext);

    const onSubmit = (value: string) => {
        const elements = searchElements(MOCK_DATA, value);
        setSearchElements(elements);
    };

    return {
        value,
        setValue,
        onSubmit,
    };
}
