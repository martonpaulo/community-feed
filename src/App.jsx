import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import { posts } from "./data/posts";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => <Post key={post.id} data={post} />).reverse()}
        </main>
      </div>
    </div>
  );
}
