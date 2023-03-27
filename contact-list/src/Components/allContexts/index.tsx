import { ReactNode } from "react";
// import { TechsContextProvider } from "../../Contexts/TechsContext";
import { UserContextProvider } from "../../Contexts/UserContext";

interface iAllContextChildren {
  children: ReactNode;
}
export const AllContexts = ({ children }: iAllContextChildren) => {
  return (
    <UserContextProvider>
      {/* <TechsContextProvider>{children}</TechsContextProvider> */}
      {children}
    </UserContextProvider>
  );
};
