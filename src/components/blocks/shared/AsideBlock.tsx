import { ReactNode } from "react";

interface AsideBlockProps {
  title: string,
  subtitle: string,
  children?: ReactNode,
}
export function AsideBlock({title, subtitle, children }: AsideBlockProps) {
  return (
    <div className="aside-block">
        <h3 className="text-primary text-700 text-14">{title}</h3>
        <p className="text-primary text-400 text-12"> { subtitle } {children} </p>
    </div>
  );
}