import {ChangeEvent} from "react";

interface IProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export default function InputUi(props: IProps) {
    const {value, onChange} = props;

    return (
        <input value={value} onChange={onChange}/>
    )
}
