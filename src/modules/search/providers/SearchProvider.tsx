import { Context, createContext, PropsWithChildren, useState } from 'react';
import { ISearchElement } from '../../shared/types/index.ts';

export const SearchContext: Context<{
    searchElements: ISearchElement[];
    setSearchElements: (elements: ISearchElement[]) => void;
    setIsFirstSearch: (value: boolean) => void;
    isFirsSearch: boolean;
}> = createContext();

interface IProps extends PropsWithChildren<unknown> {}

export default function SearchProvider(props: IProps) {
    const { children } = props;
    const [searchElements, setSearchElements] = useState<ISearchElement[]>([]);
    const [isFirsSearch, setIsFirstSearch] = useState(true);

    return (
        <SearchContext.Provider
            value={{
                searchElements,
                setSearchElements,
                isFirsSearch,
                setIsFirstSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
