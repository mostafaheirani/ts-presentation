import { FC } from "react";
import Mainlayout from "./components/layout/main";
import PersistProvider from "./contexts/persist/provider";
import HomeContent from "./components/pages/home/content";
import LanguageProvider from "./components/language-provider";

const App: FC = () => (
  <PersistProvider>
    <LanguageProvider>
      <Mainlayout>
        <HomeContent />
      </Mainlayout>
    </LanguageProvider>
  </PersistProvider>
);

export default App;
