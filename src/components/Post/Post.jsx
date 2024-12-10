import styles from "./Post.module.css";

export function Post({ author, description }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={author.avatar}
            alt={`${author.name}'s avatar`}
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title="Published on December 9, 2024, 9:54 PM"
          dateTime="2024-12-09 21:54:30"
        >
          <small>1 hour ago</small>
        </time>
      </header>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea placeholder="Add a comment..."></textarea>

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
    </article>
  );
}
