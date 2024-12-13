import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';

import { posts } from './data/posts';

import styles from './App.module.css';

import './styles/global.css';
import { getUserById } from './data/users';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar user={getUserById(1)!} />

        <main>
          {posts
            .slice()
            .reverse()
            .map((post) => {
              const author = getUserById(post.authorId);
              return (
                author && (
                  <Post key={post.id} postData={post} authorData={author} />
                )
              );
            })}
        </main>
      </div>
    </div>
  );
}
