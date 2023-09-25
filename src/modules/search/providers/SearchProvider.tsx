import { Context, createContext, PropsWithChildren, useState } from 'react';
import { ISearchElement } from '../../shared/types/index.ts';

interface ISearchContext {
    searchElements: ISearchElement[];
    setSearchElements: (elements: ISearchElement[]) => void;
    setIsFirstSearch: (value: boolean) => void;
    isFirstSearch: boolean;
    executionTime: string;
    setExecutionTime: (value: string) => void;
}

export const SearchContext: Context<ISearchContext> = createContext(
    {} as ISearchContext,
);

interface IProps extends PropsWithChildren<unknown> {}

export default function SearchProvider(props: IProps) {
    const { children } = props;
    const [searchElements, setSearchElements] = useState<ISearchElement[]>([]);
    const [isFirstSearch, setIsFirstSearch] = useState(true);
    const [executionTime, setExecutionTime] = useState('');

    return (
        <SearchContext.Provider
            value={{
                searchElements,
                setSearchElements,
                isFirstSearch,
                setIsFirstSearch,
                executionTime,
                setExecutionTime,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
