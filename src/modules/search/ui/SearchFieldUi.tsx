import { ChangeEvent, FormEvent } from 'react';

interface IProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export default function SearchFieldUi(props: IProps) {
    const { value, onChange, onSubmit } = props;

    return (
        <form className="searchForm nosubmit" onSubmit={onSubmit}>
            <input
                className="nosubmit"
                value={value}
                onChange={onChange}
                type="search"
            />
            <datalist id="browsers">
                <option value="Internet Explorer" />
                <option value="Firefox" />
                <option value="Chrome" />
                <option value="Opera" />
                <option value="Safari" />
            </datalist>
        </form>
    );
}
