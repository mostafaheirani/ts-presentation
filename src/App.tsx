import { FC } from "react";
import Mainlayout from "./components/layout/main";
import PersistProvider from "./contexts/persist/provider";
import HomeContent from "./components/pages/home/content";
import LanguageProvider from "./components/language-provider";

const App: FC = () => (
  <PersistProvider>
    <LanguageProvider>
      <Mainlayout>
        <div className="h-screen flex justify-center items-center">
          <div className="text-center w-[250px]">
            <HomeContent />
          </div>
        </div>
      </Mainlayout>
    </LanguageProvider>
  </PersistProvider>
);

export default App;
