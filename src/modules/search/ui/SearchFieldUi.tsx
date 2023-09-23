import {ChangeEvent} from "react";

interface IProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchFieldUi(props: IProps) {
    const {value, onChange} = props;

    return (
        <form>
            <input value={value} onChange={onChange}/>
            <button type="submit">Search</button>
        </form>
    )
}
