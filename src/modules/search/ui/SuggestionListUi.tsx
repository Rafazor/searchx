import { ISuggestion } from '../../shared/types/index.ts';

interface IProps {
    onSelect: (listValue: string) => void;
    suggestions: ISuggestion[];
}

export default function SuggestionListUi(props: IProps) {
    const { onSelect, suggestions } = props;

    if (!suggestions.length) return null;

    return (
        <ul>
            {suggestions.map(suggestion => (
                <li
                    key={suggestion.id}
                    onClick={() => onSelect(suggestion.title)}
                >
                    {suggestion.title}
                </li>
            ))}
        </ul>
    );
}
