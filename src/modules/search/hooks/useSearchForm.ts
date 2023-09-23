import {ChangeEvent, FormEvent, useState} from "react";

export default function useSearchForm() {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(value);
    }

    return {
        value,
        onChange,
        onSubmit
    }
}
