import { ReactNode } from "react";
import { ContactsContextProvider } from "../../Contexts/ContactsContext";
import { UserContextProvider } from "../../Contexts/UserContext";

interface iAllContextChildren {
  children: ReactNode;
}
export const AllContexts = ({ children }: iAllContextChildren) => {
  return (
    <UserContextProvider>
      <ContactsContextProvider>{children}</ContactsContextProvider>
    </UserContextProvider>
  );
};
