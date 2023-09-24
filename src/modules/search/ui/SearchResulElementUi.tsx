import { ISearchElement } from '../../shared/types/index.ts';

interface IProps {
    element: ISearchElement;
}

export default function SearchResultUi(props: IProps) {
    const { element } = props;

    return (
        <div className={'searchElement'}>
            <a href={element.url} target="_blank">
                {element.title}
            </a>
            <p>{element.description}</p>
        </div>
    );
}
