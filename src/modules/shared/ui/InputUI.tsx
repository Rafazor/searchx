import {ChangeEvent} from "react";

interface IProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputUi(props: IProps) {
    const {value, onChange} = props;

    return (
        <div>
            <input value={value} onChange={onChange}/>
        </div>
    )
}
