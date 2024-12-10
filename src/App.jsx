import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import { getUser } from "./data/users";
import { comments } from "./data/comments";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {comments.map((comment) => (
            <Post
              key={comment.id}
              author={getUser(comment.authorId)}
              description={comment.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
