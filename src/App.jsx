import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="John Doe" description="Hello, World!" />
    </div>
  );
}
