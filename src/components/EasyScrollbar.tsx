import { ReactNode, useEffect, HTMLAttributes, ElementType, forwardRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";

type Props<T extends HTMLElement> = HTMLAttributes<T> & {
  children?: ReactNode;
  container?: ElementType |  keyof HTMLElementTagNameMap
};

export const EasyScrollContainer =forwardRef<HTMLElement,Props<HTMLElement>>(
    <T extends HTMLDivElement> ({children,container, ...props}:Props<T>,ref)=>{

      const Comp = container||'div';

      return <Comp {...props} ref={ref}>{children}</Comp>
    }
)

export default EasyScrollContainer;


