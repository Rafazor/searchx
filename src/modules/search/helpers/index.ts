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