import { Header } from "@/components/Header/Header";
import { Post } from "@/components/Post/Post";
import { Sidebar } from "@/components/Sidebar/Sidebar";

import { posts } from "@/data/posts";

import styles from "./App.module.css";

import "@/styles/global.css";
import { getUserById } from "@/data/users";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar user={getUserById(1)} />

        <main>
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <Post
                key={post.id}
                author={getUserById(post.authorId)}
                content={post.content}
                publishedAt={post.publishedAt}
                comments={post.comments}
              />
            ))}
        </main>
      </div>
    </div>
  );
}
