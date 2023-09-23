import SearchFieldUi from "../ui/SearchFieldUi.tsx";
import useSearchForm from "../hooks/useSearchForm.ts";

export default function SearchFieldContainer() {
    const {value, onChange, onSubmit} = useSearchForm()

    return (
     <>
        <SearchFieldUi value={value} onChange={onChange} onSubmit={onSubmit} />
     </>
    )
}
