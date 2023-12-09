import { FC } from "react";
import Button from "./components/button";

const App: FC = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="text-center w-[250px]">
      <Button
        tagName="a"
        href="https://google.com"
        target="_blank"
        color="accent"
        variant="outline"
        fullWidth
      >
        Hello
      </Button>
    </div>
  </div>
);

export default App;
