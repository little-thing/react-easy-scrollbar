import { useEffect, useRef, MutableRefObject } from 'react';
import PerfectScrollbar from "perfect-scrollbar";

export const useEasyScrollbar = <E extends HTMLElement>(ref: MutableRefObject<E>, options?: PerfectScrollbar.Options) => {
    const psRef = useRef<PerfectScrollbar | null>(null);

    const _ps = psRef.current;

    useEffect(() => {
        const element = ref.current;
        if (element) {
            psRef.current = new PerfectScrollbar(element, options);
        }

        return () => {
            if (_ps) {
                _ps.destroy();
            }
        };
    }, [_ps, ref, options]);
    return {
        scrollBarWidth: 0
    };
}

export default useEasyScrollbar;
