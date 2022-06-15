import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
