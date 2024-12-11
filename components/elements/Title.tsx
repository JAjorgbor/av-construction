import type { FC, ReactNode } from "react";

interface titleProps {
  children: ReactNode;
}

const Title: FC<titleProps> = ({ children }) => {
  return (
    <p className="text-primary w-full flex items-center gap-3">
      <span className="inline-block w-20 h-0.5 bg-primary" />
      {children}
    </p>
  );
};
export default Title;
