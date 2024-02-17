import { FC } from "react";

const Loading: FC = () => (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <span className="loading loading-dots loading-lg"></span>
  </div>
);

export default Loading;
