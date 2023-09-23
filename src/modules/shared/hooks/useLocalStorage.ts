import { useState } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue: T,
): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window !== "undefined") {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
    });

    const updateStoredValue = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    return [storedValue, updateStoredValue];
}
