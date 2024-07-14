import { useEffect, useRef, RefObject } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import '../scrollbar.css';

export const useEasyScrollbar = <E extends HTMLElement>(ref: RefObject<E>, options?: PerfectScrollbar.Options) => {
    const psRef = useRef<PerfectScrollbar | null>(null);

    const _ps = psRef.current;

    useEffect(() => {
        const element = ref.current;
        if (element) {
            const computedStyle = window.getComputedStyle(element);
            const hasPositionStyle = computedStyle.position !== 'static';
            if(!hasPositionStyle){
                // 添加 CSS 类
                element.classList.add('easy-container');
            }
            
            psRef.current = new PerfectScrollbar(element, options);

        }

        return () => {
            if (_ps) {
                _ps.destroy();
            }
        };
    }, [_ps, ref, options]);

}

export default useEasyScrollbar;
