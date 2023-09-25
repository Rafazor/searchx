import { RefObject, useEffect } from 'react';

function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !('nodeType' in e)) {
        throw new Error(`Node expected`);
    }
}

export default function useOutsideClick<T>(
    ref: RefObject<T>,
    callback: () => void,
) {
    function handleClickOutside({ target }: MouseEvent) {
        assertIsNode(target);
        if (!ref && !ref['current']) return;

        const clickElementRef = ref as unknown as { current: HTMLElement };

        if (
            clickElementRef.current &&
            !clickElementRef.current.contains(target)
        ) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}
