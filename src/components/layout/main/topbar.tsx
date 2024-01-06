import { FC } from "react";
import ThemeSwitcher from "../../theme-switcher";
import LanguageSwithcer from "../../../components/language-switcher";

const TopBar: FC = () => {
  return (
    <div className="backdrop-blur fixed top-0 left-0 right-0 container mx-auto p-4 flex gap-2 justify-end">
      <LanguageSwithcer />
      <ThemeSwitcher />
    </div>
  );
};

export default TopBar;
