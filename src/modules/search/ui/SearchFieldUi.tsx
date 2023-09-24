import React, { FormEvent, useCallback, useRef, useState } from 'react';
import SuggestionListUi from './SuggestionListUi.tsx';
import useOutsideClick from '../../shared/hooks/useOutsideClick.ts';
import { ISuggestion } from '../../shared/types/index.ts';
import { clsx } from 'clsx';
import { FaSearch } from 'react-icons/fa';

interface IProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
    removeSuggestion: (suggestion: ISuggestion) => void;
    suggestions: ISuggestion[];
}

export default function SearchFieldUi(props: IProps) {
    const { value, onChange, onSubmit, suggestions, removeSuggestion } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(true);

    const handleOutsideClick = useCallback(() => {
        setIsSuggestionsOpen(false);
    }, []);

    const handleOnSelect = (listValue: string) => {
        inputRef.current?.blur();
        onChange(listValue);
        onSubmit(listValue);
        setIsSuggestionsOpen(false);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log('submit', event);
        event.preventDefault();
        inputRef.current?.blur();
        onSubmit(event.target[0].value);
        setIsSuggestionsOpen(false);
    };

    useOutsideClick(wrapperRef, handleOutsideClick);

    return (
        <form
            ref={wrapperRef}
            autoComplete="off"
            className="searchForm nosubmit"
            onSubmit={handleSubmit}
        >
            <div className="searchWrapper">
                <FaSearch className="inputIcon" />
                <input
                    onFocus={() => setIsSuggestionsOpen(true)}
                    ref={inputRef}
                    className={clsx('nosubmit', {
                        isSuggestionsOpen: isSuggestionsOpen,
                        isSuggestionsClosed:
                            !isSuggestionsOpen || !suggestions.length,
                    })}
                    value={value}
                    autoFocus
                    onChange={event => onChange(event.target.value)}
                    type="search"
                />

                {isSuggestionsOpen && (
                    <SuggestionListUi
                        suggestions={suggestions}
                        onSelect={handleOnSelect}
                        onRemove={removeSuggestion}
                    />
                )}
            </div>
        </form>
    );
}
