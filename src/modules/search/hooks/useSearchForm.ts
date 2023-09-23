import { useState } from 'react';

export default function useSearchForm() {
    const [value, setValue] = useState('');

    const onSubmit = (value: string) => {
        alert(value);
    };

    return {
        value,
        setValue,
        onSubmit,
    };
}
