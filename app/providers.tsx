"use client";
import { IconContext } from "react-icons";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <IconContext.Provider value={{ className: "app-icon" }}>
      {children}
    </IconContext.Provider>
  );
};
