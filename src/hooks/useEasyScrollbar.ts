import { useEffect, useRef, RefObject, ForwardedRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import '../scrollbar.css';


export const useEasyScrollbar = <E extends HTMLElement>(ref: ForwardedRef<E>|RefObject<E>|string, options?: PerfectScrollbar.Options) => {
    const psRef = useRef<PerfectScrollbar | null>(null);

    const _ps = psRef.current;

    useEffect(() => {
        if (!ref) {
            return ;
        }

        if(typeof ref === 'function'){
            let fn = ref;
            ref = element =>{
                fn(element);

                if(!element){
                    return;
                }

                if (element instanceof Element) {
                    const computedStyle = window.getComputedStyle(element);
                    const hasPositionStyle = computedStyle.position !== 'static';
                    if(!hasPositionStyle){
                        // 添加 CSS 类
                        element.classList.add('easy-container');
                    }

                    psRef.current = new PerfectScrollbar(element, options);

                }else {
                    console.warn('ref current is not a HTMLElement');
                }


            }

        }else if(typeof ref === 'string' ){
            const element = document.querySelector(ref);

            if(element){
                if (element instanceof Element) {
                    const computedStyle = window.getComputedStyle(element);
                    const hasPositionStyle = computedStyle.position !== 'static';
                    if(!hasPositionStyle){
                        // 添加 CSS 类
                        element.classList.add('easy-container');
                    }

                    psRef.current = new PerfectScrollbar(ref, options);

                }else {
                    console.warn('ref current is not a HTMLElement');
                }
            }
        }else {
            const element = ref.current;
            if (element) {

                if(element instanceof  Element){
                    const computedStyle = window.getComputedStyle(element);
                    const hasPositionStyle = computedStyle.position !== 'static';
                    if(!hasPositionStyle){
                        // 添加 CSS 类
                        element.classList.add('easy-container');
                    }

                    psRef.current = new PerfectScrollbar(element, options);
                }else {
                    console.warn('ref current is not a HTMLElement');
                }

            }
        }



        return () => {
            if (_ps) {
                _ps.destroy();
            }
        };
    }, [_ps, ref, options]);

}

export default useEasyScrollbar;
