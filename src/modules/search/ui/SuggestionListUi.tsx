import { ISuggestion } from '../../shared/types/index.ts';
import { FaSearch, FaHistory } from 'react-icons/fa';
import { clsx } from 'clsx';

interface IProps {
    onSelect: (listValue: string) => void;
    suggestions: ISuggestion[];
    onRemove: (suggestion: ISuggestion) => void;
}

export default function SuggestionListUi(props: IProps) {
    const { onSelect, suggestions, onRemove } = props;

    if (!suggestions.length) return null;

    return (
        <ul>
            {suggestions.map(suggestion => (
                <li
                    className={clsx({
                        isHistory: suggestion.isHistory,
                    })}
                    key={suggestion.id}
                    onClick={event => {
                        event.stopPropagation();
                        onSelect(suggestion.title);
                    }}
                >
                    <p>
                        {suggestion.isHistory ? <FaHistory /> : <FaSearch />}
                        {suggestion.title}
                    </p>
                    {suggestion.isHistory && (
                        <span
                            onClick={event => {
                                event.stopPropagation();
                                onRemove(suggestion);
                            }}
                        >
                            Remove
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
}
