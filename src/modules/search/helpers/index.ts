import { ISearchElement, ISuggestion } from '../../shared/types/index.ts';
import { uuidv4 } from '../../shared/helpers/index.ts';

export function generateSuggestions(elements: ISearchElement[]): ISuggestion[] {
    return elements.map(element => ({
        id: uuidv4(),
        title: element.title,
    }));
}

export function searchElements(elements: ISearchElement[], value: string) {
    return elements.filter(element =>
        element.title.toLowerCase().startsWith(value.toLowerCase()),
    );
}
export function searchResultElements(
    elements: ISearchElement[],
    value: string,
) {
    return elements.filter(element =>
        element.title.toLowerCase().includes(value.toLowerCase()),
    );
}

export function searchSuggestions(suggestions: ISuggestion[], value: string) {
    return suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().startsWith(value.toLowerCase()),
    );
}
