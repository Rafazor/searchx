import { Context, createContext, PropsWithChildren, useState } from 'react';
import { ISearchElement } from '../../shared/types/index.ts';

export const SearchContext: Context<{
    searchElements: ISearchElement[];
    setSearchElements: (elements: ISearchElement[]) => void;
}> = createContext();

interface IProps extends PropsWithChildren<unknown> {}

export default function SearchProvider(props: IProps) {
    const { children } = props;
    const [searchElements, setSearchElements] = useState<ISearchElement[]>([]);

    return (
        <SearchContext.Provider value={{ searchElements, setSearchElements }}>
            {children}
        </SearchContext.Provider>
    );
}
