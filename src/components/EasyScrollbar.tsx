import { ReactNode, HTMLAttributes, ElementType, forwardRef, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import '../scrollbar.css';
import { useEasyScrollbar } from '../hooks';

type Props<T extends HTMLElement> = HTMLAttributes<T> & {
  children?: ReactNode;
  container?: ElementType | keyof HTMLElementTagNameMap;
  options?: PerfectScrollbar.Options;
};

export const EasyScrollContainer = forwardRef<HTMLElement, Props<HTMLElement>>(
  <T extends HTMLDivElement>({ children, container, options, ...props }: Props<T>, ref: any) => {
    const Comp = container || 'div';

    const devRef = useRef<T>(null);

    const _ref = ref || devRef;

    useEasyScrollbar(_ref);

    return (
      <Comp {...props} ref={_ref}>
        {children}
      </Comp>
    );
  }
);

export default EasyScrollContainer;
