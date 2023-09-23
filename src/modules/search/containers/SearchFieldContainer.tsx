import SearchFieldUi from '../ui/SearchFieldUi.tsx';
import useSearchForm from '../hooks/useSearchForm.ts';

export default function SearchFieldContainer() {
    const { value, setValue, onSubmit } = useSearchForm();

    return (
        <>
            <SearchFieldUi
                value={value}
                onChange={setValue}
                onSubmit={onSubmit}
                suggestions={[
                    {
                        id: '1',
                        title: 'test',
                        isHistory: true,
                    },
                    {
                        id: '2',
                        title: 'test2',
                        isHistory: true,
                    },
                ]}
            />
        </>
    );
}
