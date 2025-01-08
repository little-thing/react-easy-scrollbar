import { ReactNode, HTMLAttributes, ElementType, forwardRef, useRef, useMemo } from 'react';
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
  <T extends HTMLElement>({ children, container, options, ...props }: Props<T>, ref: React.ForwardedRef<T>) => {
    const Comp = useMemo(() => container || 'div', [container]);
    const devRef = useRef<T | null>(null);
    const _ref = ref || devRef;
    useEasyScrollbar(_ref as React.RefObject<T>, options); // 确保类型一致性
    return (
      <Comp {...props} ref={_ref}>
        {children}
      </Comp>
    );
  }
);

export default EasyScrollContainer;
