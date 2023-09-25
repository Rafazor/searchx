import { Context, createContext, PropsWithChildren, useState } from 'react';
import { ISearchElement } from '../../shared/types/index.ts';

export const SearchContext: Context<{
    searchElements: ISearchElement[];
    setSearchElements: (elements: ISearchElement[]) => void;
    setIsFirstSearch: (value: boolean) => void;
    isFirstSearch: boolean;
    executionTime: number;
    setExecutionTime: (value: number) => void;
}> = createContext();

interface IProps extends PropsWithChildren<unknown> {}

export default function SearchProvider(props: IProps) {
    const { children } = props;
    const [searchElements, setSearchElements] = useState<ISearchElement[]>([]);
    const [isFirstSearch, setIsFirstSearch] = useState(true);
    const [executionTime, setExecutionTime] = useState(0);

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
