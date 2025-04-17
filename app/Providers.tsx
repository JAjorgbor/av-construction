"use client";
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics
import { usePathname } from "next/navigation";
import { useEffect, type FC, type ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface ProvidersProps {
  children: ReactNode;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-KM0RG3VL3L", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      <ToastContainer />
      <Analytics />
      {children}
    </>
  );
};
export default Providers;
