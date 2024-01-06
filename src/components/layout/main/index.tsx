import { FC, PropsWithChildren } from "react";
import TopBar from "./topbar";

const Mainlayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default Mainlayout;
