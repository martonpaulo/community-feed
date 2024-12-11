import { getUserById } from "../../data/users";
import { formatDate, timeAgo } from "../../utils/dateFormatter";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

export function Post({ data }) {
  const { authorId, content, timestamp, comments } = data;
  const author = getUserById(authorId);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar size={4} className={styles.avatar} user={author} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formatDate(timestamp)} dateTime={timestamp}>
          <small>{timeAgo(timestamp)}</small>
        </time>
      </header>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea placeholder="Add a comment..."></textarea>

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.length > 0 &&
          comments
            .map((comment) => <Comment key={comment.id} data={comment} />)
            .reverse()}
      </div>
    </article>
  );
}
