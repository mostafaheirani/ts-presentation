import React, { FC, PropsWithChildren } from "react";
import TopBar from "./topbar";

const Mainlayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <TopBar />
      <div className="container mx-auto mt-[72px] py-4 px-4">{children}</div>
    </>
  );
};

export default Mainlayout;
