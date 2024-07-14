import { ReactNode, useEffect, HTMLAttributes, ElementType, forwardRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";

type Props<T extends HTMLElement> = HTMLAttributes<T> & {
  children?: ReactNode;
  container?: ElementType |  keyof HTMLElementTagNameMap
  options?:PerfectScrollbar.Options
};

export const EasyScrollContainer =forwardRef<HTMLElement,Props<HTMLElement>>(
    <T extends HTMLDivElement> ({children,container,options, ...props}:Props<T>,ref:any)=>{

      const Comp = container||'div';

useEffect(()=>{
        if(ref.current){
        const ps =   new PerfectScrollbar(ref.current,options);

        return ()=>ps.destroy();
        }

      },[ref])

      return <Comp {...props} ref={ref}>{children}</Comp>
    }
)

export default EasyScrollContainer;



