import { useCallback, useRef, useState } from 'react';
import SuggestionListUi from './SuggestionListUi.tsx';
import useOutsideClick from '../../shared/hooks/useOutsideClick.ts';
import { ISuggestion } from '../../shared/types/index.ts';

interface IProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
    suggestions: ISuggestion[];
}

export default function SearchFieldUi(props: IProps) {
    const { value, onChange, onSubmit, suggestions } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(true);

    const handleOutsideClick = useCallback(() => {
        setIsSuggestionsOpen(false);
    }, []);

    useOutsideClick(wrapperRef, handleOutsideClick);

    return (
        <form
            ref={wrapperRef}
            autoComplete="off"
            className="searchForm nosubmit"
            onSubmit={() => onSubmit(value)}
        >
            <div className="searchWrapper">
                <input
                    onFocus={() => {
                        setIsSuggestionsOpen(true);
                    }}
                    ref={inputRef}
                    className="nosubmit"
                    value={value}
                    autoFocus
                    onChange={event => onChange(event.target.value)}
                    type="search"
                />
                {isSuggestionsOpen && (
                    <SuggestionListUi
                        suggestions={suggestions}
                        onSelect={(listValue: string) => {
                            onChange(listValue);
                            onSubmit(listValue);
                            setIsSuggestionsOpen(false);
                        }}
                    />
                )}
            </div>
        </form>
    );
}
