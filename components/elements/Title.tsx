import type { FC, ReactNode } from "react";

interface titleProps {
  children: ReactNode;
  className?: string;
}

const Title: FC<titleProps> = ({ children, className }) => {
  return (
    <p className={`text-primary w-full flex items-center gap-3 ${className}`}>
      <span className="inline-block w-20 h-0.5 bg-primary" />
      {children}
    </p>
  );
};
export default Title;
