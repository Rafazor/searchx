import { PropsWithChildren, useContext } from 'react';
import { clsx } from 'clsx';
import { SearchContext } from '../providers/SearchProvider.tsx';

interface IProps extends PropsWithChildren<unknown> {}

export default function SearchLayoutUi(props: IProps) {
    const { children } = props;
    const { isFirstSearch } = useContext(SearchContext);

    return (
        <div
            className={clsx('searchLayout', {
                searchLayoutWithoutResults: isFirstSearch,
            })}
        >
            {children}
        </div>
    );
}
