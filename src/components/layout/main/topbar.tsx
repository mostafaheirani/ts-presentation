import { FC } from "react";
import ThemeSwitcher from "../../theme-switcher";
import LanguageSwithcer from "../../../components/language-switcher";

const TopBar: FC = () => {
  return (
    <div className="backdrop-blur fixed top-0 left-0 right-0 z-10 bg-base-100/60">
      <div className="container mx-auto p-4 flex gap-2 justify-between">
        <div>
          <img
            src="/typescript-2.svg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
        </div>
        <div className="flex gap-2 items-center">
          <LanguageSwithcer />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
